import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Contato } from '../shared/model/contato';

@Component({
  selector: 'app-contato-detalhes',
  templateUrl: './contato-detalhes.component.html',
  styleUrls: ['./contato-detalhes.component.scss']
})
export class ContatoDetalhesComponent implements OnInit {

  id: number;
  contato: Contato;
  constructor(private contatoService: ContatoService, private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.contato = new Contato();
    this.id = this.acRoute.snapshot.params['id'];

    this.contatoService.getContato(this.id).subscribe(
      contato => {
        console.log(contato);
        this.contato = contato;
      },
      error => console.log(error)
    )
  }

  list() {
    this.router.navigate(['contatos']);
  }
}
