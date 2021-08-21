import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtualizarContatoComponent } from './atualizar-contato/atualizar-contato.component';
import { ContatoDetalhesComponent } from './contato-detalhes/contato-detalhes.component';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { CriarContatoComponent } from './criar-contato/criar-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarContatoComponent,
    ContatoDetalhesComponent,
    ContatoListComponent,
    AtualizarContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
