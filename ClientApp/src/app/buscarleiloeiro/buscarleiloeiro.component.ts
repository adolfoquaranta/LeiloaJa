import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { LeiloeiroServico } from '../Servicos/leiloeiroservico.servico';

@Component({
    templateUrl: './buscarleiloeiro.component.html'
})

export class BuscarleiloeiroComponent {
    public listaleiloeiros: leiloeiroData[];

  constructor(public http: Http, private _router: Router, private _leiloeiroServico: LeiloeiroServico) {
        this.obterleiloeiros();
    }

  obterleiloeiros() {
    this._leiloeiroServico.obterLeiloeiros().subscribe(
            data => this.listaleiloeiros = data
        )
    }

    deletar(idleiloeiro) {
        var resposta = confirm("Confirma a remoção do usuário com Id: " + idleiloeiro);
        if (resposta) {
            this._leiloeiroServico.deletarLeiloeiro(idleiloeiro).subscribe((data) => {
                this.obterleiloeiros();
            }, error => console.error(error))
        }
    }
}


interface leiloeiroData {
  idleiloeiro: number;
  nome: string;
  idusuario: number;
  usuario: string;
  leiloes: string;
}
