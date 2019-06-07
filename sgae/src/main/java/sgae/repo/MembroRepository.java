package sgae.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sgae.model.Membro;

@Repository
public interface MembroRepository extends JpaRepository<Membro, Long>{

}
