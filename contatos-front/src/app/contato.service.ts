import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from './shared/model/contato';

const url = 'http://localhost:8080/api/v1/contatos/';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

  constructor(private http: HttpClient) { }

  getContato(id: number): Observable<Contato> {
    return this.http.get<Contato>(url + id);
  }

  createContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(url, contato);
  }

  updateContato(id: number, contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(url + id, contato);
  }

  deleteContato(id: number): Observable<any> {
    return this.http.delete(url + id, { responseType: 'text' });
  }

  getContatoList(): Observable<Contato[]> {
    return this.http.get<Contato[]>(url);
  }
}
