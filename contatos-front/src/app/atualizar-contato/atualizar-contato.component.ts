import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Contato } from '../shared/model/contato';

@Component({
  selector: 'app-atualizar-contato',
  templateUrl: './atualizar-contato.component.html',
  styleUrls: ['./atualizar-contato.component.scss']
})
export class AtualizarContatoComponent implements OnInit {

  id: number;
  contato: Contato;
  submitted = false;

  constructor(private contatoService: ContatoService, private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.contato = new Contato();

    this.id = this.acRoute.snapshot.params['id'];

    this.contatoService.getContato(this.id).subscribe(
      data => {
        console.log(data);
        this.contato = data;
      },
      error => console.log(error)
    );
  }

  atualizarContato() {
    this.contatoService.updateContato(this.id, this.contato).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.contato = new Contato();
    this.goToList();
  }

  onSubmit() {
    this.atualizarContato();
  }

  goToList() {
    this.router.navigate(['/contatos'])
  }
}
