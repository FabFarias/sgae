package sgae.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "membro")
public class Membro {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idmembro", nullable = true)
	private Long idMembro;
	
	@Column(name = "nome", nullable = true)
	private String nome;
	
	@Column(name = "idade", nullable = true)
	private String idade;
	
	@Column(name = "endereco", nullable = true)
	private String endereco;
	
	@Column(name = "documento", nullable = true)
	private String documento;
	
	public Long getIdMembro() {
		return idMembro;
	}

	public void setIdMembro(Long idMembro) {
		this.idMembro = idMembro;
	}

	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getIdade() {
		return idade;
	}
	
	public void setIdade(String idade) {
		this.idade = idade;
	}
	
	public String getEndereco() {
		return endereco;
	}
	
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	
	public String getDocumento() {
		return documento;
	}
	
	public void setDocumento(String documento) {
		this.documento = documento;
	}

	@Override
	public String toString() {
		return "Membro [idMembro=" + idMembro + ", nome=" + nome + ", idade=" + idade + ", endereco=" + endereco
				+ ", documento=" + documento + "]";
	}
	
}
