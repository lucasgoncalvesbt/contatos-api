import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContatoService } from '../contato.service';
import { Contato } from '../shared/model/contato';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.scss']
})
export class ContatoListComponent implements OnInit {

  contatos: Observable<Contato[]>;

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.contatos = this.contatoService.getContatoList();
  }

  removerContato(id: number) {
    this.contatoService.deleteContato(id).subscribe(contato => {
      console.log(contato);
      this.reloadData();
    },
      error => console.log(error)
    );
  }

  contatoDetalhes(id: number) {
    this.router.navigate(['detalhes', id]);
  }

  atualizarContato(id: number) {
    this.router.navigate(['atualizar', id]);
  }
}
