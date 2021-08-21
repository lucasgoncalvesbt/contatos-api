package one.digitalinnovation.contatosapi.repository;

import one.digitalinnovation.contatosapi.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
}
