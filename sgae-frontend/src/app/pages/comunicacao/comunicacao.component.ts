import { Component } from '@angular/core'

declare let $: any

@Component({
  selector: 'comunicacao',
  templateUrl: './comunicacao.component.html'
})
export class ComunicacaoComponent {

  ngOnInit() {
    $('.chips-autocomplete').chips({
      autocompleteOptions: {
        data: {
          'Dep Midia': null,
          'Dep Louvor': null,
          'Dep Diaconato': null,
          'Dep Infantil': null,
          'Dep Evangelismo': null,
          'Dep Mulheres': null,
          'Dep Casais': null,
          'Dep Assistencia Social': null,
          'Dep Visitantes': null,
          'Dep Jovens': null,
          'Dep Missoes': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
  }
}