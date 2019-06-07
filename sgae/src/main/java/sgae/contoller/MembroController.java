package sgae.contoller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sgae.model.Membro;
import sgae.repo.MembroRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/crud")
public class MembroController {

	@Autowired
	private MembroRepository membroRepository;
	
	@GetMapping("/membros")
	public List<Membro> listar() {
		return membroRepository.findAll();
	}
	
	@PostMapping("/membro")
    public Membro inserirMembro(@Valid @RequestBody Membro membro) {
		System.out.println(membro.toString());
        return membroRepository.save(membro);
    }
	
	@PutMapping("/membro/alterar")
    public ResponseEntity<Membro> alterarMembro(@Valid @RequestBody Membro membro) {
		Membro membroBanco = membroRepository.getOne(membro.getIdMembro());

		membroBanco.setNome(membro.getNome());
		membroBanco.setIdade(membro.getIdade());
		membroBanco.setEndereco(membro.getEndereco());
		membroBanco.setDocumento(membro.getDocumento());
        final Membro membroAtualizado = membroRepository.save(membroBanco);
        
        return ResponseEntity.ok(membroAtualizado);
    }
	
	@DeleteMapping("/membro/excluir/{id}")
	public void deletarMembro(@PathVariable(value = "id") Long idMembro) {
		membroRepository.deleteById(idMembro);
	}
}
