import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Contato } from '../shared/model/contato';

@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.scss']
})
export class CriarContatoComponent implements OnInit {

  contato: Contato = new Contato();
  submitted = false;

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit(): void {
  }

  novoContato(): void {
    this.submitted = false;
    this.contato = new Contato();
  }

  save(): void {
    this.contatoService.createContato(this.contato).subscribe(
      contato => console.log(contato),
      error => console.log(error)
    );
    this.contato = new Contato();
    this.goToList();
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  goToList(): void {
    this.router.navigate(['/contatos'])
  }
}
