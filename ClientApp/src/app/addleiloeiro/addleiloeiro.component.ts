import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BuscarleiloeiroComponent } from '../buscarleiloeiro/buscarleiloeiro.component';
import { LeiloeiroServico } from '../../app/Servicos/leiloeiroservico.servico';

@Component({
    templateUrl: './addleiloeiro.component.html'
})

export class AddLeiloeiroComponent implements OnInit {
    leiloeiroForm: FormGroup;
    titulo: string = "Cadastro";
    idLeiloeiro: number;
    messagemErro: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _leiloeiroServico: LeiloeiroServico, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.idLeiloeiro = this._avRoute.snapshot.params["id"];
        }

        this.leiloeiroForm = this._fb.group({
            idLeiloeiro: 0,
            nome: ['', [Validators.required]]
        })
    }

    ngOnInit() {

        if (this.idLeiloeiro > 0) {
            this.titulo = "Editar";
            this._leiloeiroServico.obterLeiloeiroPorId(this.idLeiloeiro)
                .subscribe(resp => this.leiloeiroForm.setValue(resp)
                    , error => this.messagemErro = error);
        }

    }

    salvar() {

        if (!this.leiloeiroForm.valid) {
            return;
        }

        if (this.titulo == "Cadastro") {
            this._leiloeiroServico.salvarLeiloeiro(this.leiloeiroForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/buscar-leiloeiro']);
                }, error => this.messagemErro = error)
        }
        else if (this.titulo == "Editar") {
            this._leiloeiroServico.atualizarLeiloeiro(this.leiloeiroForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/buscar-leiloeiro']);
                }, error => this.messagemErro = error)
        }
    }

    cancelar() {
        this._router.navigate(['/buscar-leiloeiro']);
    }

    get nome() { return this.leiloeiroForm.get('nome'); }


}
