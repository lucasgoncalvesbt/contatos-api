package one.digitalinnovation.contatosapi.controller;

import one.digitalinnovation.contatosapi.exception.NotFoundException;
import one.digitalinnovation.contatosapi.model.Contato;
import one.digitalinnovation.contatosapi.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/contatos")
public class ContatoController {

    private ContatoRepository contatoRepository;

    @Autowired
    public ContatoController(ContatoRepository contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    @GetMapping
    public ResponseEntity<List<Contato>> listarTodosContatos() {
        return ResponseEntity.ok(contatoRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contato> listarContato(@PathVariable Long id) {
        Contato contato = contatoRepository.findById(id).orElseThrow(() -> new NotFoundException("Contato de ID: " + id + "não encontrado"));
        return ResponseEntity.ok(contato);
    }

    @PostMapping
    public ResponseEntity<Contato> criarContato(@Valid @RequestBody Contato contato) {
        return ResponseEntity.ok(contatoRepository.save(contato));
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<Contato> atualizarContato(@PathVariable Long id, @Valid @RequestBody Contato reqContato) {
        Contato contato = contatoRepository.findById(id).orElseThrow(() -> new NotFoundException("Contato de ID: " + id + "não encontrado"));
        contato.setNome(reqContato.getNome());
        contato.setSobrenome(reqContato.getSobrenome());
        contato.setNumeroCelular(reqContato.getNumeroCelular());
        contato.setNumeroResidencial(reqContato.getNumeroResidencial());
        return ResponseEntity.ok(contato);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>>  remover(@PathVariable Long id) {
        Contato contato = contatoRepository.findById(id).orElseThrow(() -> new NotFoundException("Contato de ID: " + id + "não encontrado"));
        contatoRepository.deleteById(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
