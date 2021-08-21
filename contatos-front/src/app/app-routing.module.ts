
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarContatoComponent } from './atualizar-contato/atualizar-contato.component';
import { ContatoDetalhesComponent } from './contato-detalhes/contato-detalhes.component';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { CriarContatoComponent } from './criar-contato/criar-contato.component';

const routes: Routes = [
  { path: '', redirectTo: 'contatos', pathMatch: 'full' },
  { path: 'contatos', component: ContatoListComponent },
  { path: 'adicionar', component: CriarContatoComponent },
  { path: 'atualizar/:id', component: AtualizarContatoComponent },
  { path: 'detalhes/:id', component: ContatoDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
