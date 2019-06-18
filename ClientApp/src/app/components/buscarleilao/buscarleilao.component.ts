import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-buscar-leilao',
    templateUrl: './buscarleilao.component.html'
})

export class BuscarLeilaoComponent {
  public listaLeiloes: LeilaoData[];
    _http: any;
    _baseUrl: any;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
    this.carregarDados(http);
  }

  deletar(idLeilao) {
    var resposta = confirm("Confirma a remoção do leilão com Id: " + idLeilao);
    if (resposta) {
      this._http.delete(this._baseUrl + 'api/Leilao/Deletar/' + idLeilao).subscribe((data) => {
        this.carregarDados(this._http);
      }, error => console.error(error))
    }
  }

  carregarDados(http: HttpClient) {
    http.get<LeilaoData[]>(this._baseUrl + 'api/Leilao/Index').subscribe(result => {
      this.listaLeiloes = result;
    }, error => console.error(error))
  }
}


interface LeilaoData {
    idLeilao: number;
    nome: string;
    valorInicial: number;
    indCondicaoUso: boolean;
    dataDeAbertura: string;
    dataDeFinalizacao: string;
    indFinalizado: boolean;
}
