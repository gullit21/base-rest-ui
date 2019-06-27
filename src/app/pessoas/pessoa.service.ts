import { environment } from './../../environments/environment.prod';
import { MoneyHttp } from './../seguranca/money-http';
import { Pessoa } from './../core/model';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class PessoaFiltro {
    nome: string;
    // tslint:disable-next-line: no-inferrable-types
    pagina: number = 0;
    // tslint:disable-next-line: no-inferrable-types
    itensPorPagina: number = 5;
}

@Injectable({
    providedIn: 'root'
})
export class PessoaService {

    pessoaUrl: string;

    constructor(private http: MoneyHttp) {
        //this.pessoaUrl = `${environment.apiUrl}/pessoas`;
        this.pessoaUrl = `${environment.apiUrl}/usuarios`;
    }

    pesquisar(filtro: PessoaFiltro): Observable<any> {
      let params = new HttpParams();

      if (filtro.nome) {
          params = params.append('nome', filtro.nome);
      }

      const httpOptions = {
          params
      };

      return this.http.get(`${this.pessoaUrl}`, httpOptions);
  }
}
