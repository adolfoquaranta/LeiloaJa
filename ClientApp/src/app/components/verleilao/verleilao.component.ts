import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verleilao',
  templateUrl: './verleilao.component.html',
  styleUrls: ['./verleilao.component.css']
})
export class VerleilaoComponent implements OnInit {
  leilao: LeilaoData;
  @Input()
  idLeilao: number;
  messagemErro: any;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private activatedRoute: ActivatedRoute) {

    this.idLeilao = parseInt(activatedRoute.snapshot.paramMap.get("idLeilao"));

    http.get<LeilaoData>(baseUrl + "api/Leilao/Detalhar/" + this.idLeilao).subscribe(
      resp => {
        this.leilao = resp;
      },
      error => this.messagemErro = error);
  }

  ngOnInit() {
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
