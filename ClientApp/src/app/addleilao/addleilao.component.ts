import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeilaoServico } from '../../app/Servicos/leilaoservico.servico';

import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-leilao',
  templateUrl: './addleilao.component.html'
})

export class AddLeilaoComponent {
  leilaoForm: FormGroup;
  titulo: string = "Cadastro";
  idLeilao: number;

  messagemErro: any;
  _http: any;
  _baseUrl: string;

  constructor(private _fb: FormBuilder, private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private _router: Router) {
    this._http = http;
    this._baseUrl = baseUrl;

    this.leilaoForm = this._fb.group({
      idLeilao: 0,
      nome: ['', [Validators.required]],
      valorinicial: ['', [Validators.required]],
      indcondicaouso: ['', [Validators.required]],
      dataabertura: ['', [Validators.required]],
      datafinalizacao: [''],
    })
  }

  salvar() {
    if (!this.leilaoForm.valid) {
      return;
    }
    this._http.post(this._baseUrl + 'api/Leilao/Salvar', this.leilaoForm.value).subscribe(result => {
      this._router.navigate(['/buscar-leilao']);
    }, error => {
        console.error(error);
        this.messagemErro;
    });
  }

  cancelar() {
    this._router.navigate(['/buscar-leilao']);
  }


  get nome() { return this.leilaoForm.get('nome'); }
  get valorinicial() { return this.leilaoForm.get('valorinicial'); }
  get indcondicaouso() { return this.leilaoForm.get('indcondicaouso') }
  get dataabertura() { return this.leilaoForm.get('dataabertura'); }
  get datafinalizacao() { return this.leilaoForm.get('datafinalizacao'); }
}
