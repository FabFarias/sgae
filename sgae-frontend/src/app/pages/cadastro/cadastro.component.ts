import { Component } from '@angular/core'
import { Http, ResponseContentType } from '@angular/http'

declare let $: any

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  constructor(private http: Http) {}
  
  membros = []

  novoMembro = {
    idMembro: null,
    nome: '',
    idade: '',
    endereco: '',
    documento: ''
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
      // $('.modal-trigger').leanModal();
    });

    console.log('RESULT')
    this.http.get('http://192.168.11.4:8080/crud/membros')
        .subscribe((result) => {
      let lista = result['_body']

      this.membros = JSON.parse(lista)
    })
  }

  configuraSalvar() {
    this.novoMembro = {
      idMembro: null,
      nome: '',
      idade: '',
      endereco: '',
      documento: ''
    }
  }

  salvarMembro() {
    this.http.post('http://192.168.11.4:8080/crud/membro', this.novoMembro)
        .subscribe((result) => {
      let membro = result['_body']
      console.log('membro', membro)
      this.membros.push(JSON.parse(membro))
      this.novoMembro = {
        idMembro: null,
        nome: '',
        idade: '',
        endereco: '',
        documento: ''
      }
    })
  }

  configuraAlterar(membro) {
    this.novoMembro = membro
  }

  alterarMembro() {
    this.http.put('http://192.168.11.4:8080/crud/membro/alterar', this.novoMembro)
        .subscribe((result) => {
      this.novoMembro = {
        idMembro: null,
        nome: '',
        idade: '',
        endereco: '',
        documento: ''
      }
    })

  }

  excluirMembro(membro) {
    console.log(membro)
    this.http.delete('http://192.168.11.4:8080/crud/membro/excluir/' + membro['idMembro'], { responseType: ResponseContentType.Text })
        .subscribe((result) => {
      console.log('retornou')
      let index = this.membros.indexOf(membro)
      this.membros.splice(index, 1)
    })
  }
}