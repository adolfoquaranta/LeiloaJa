import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-leilao',
  templateUrl: './addleilao.component.html'
})

export class AddLeilaoComponent {
  leilaoForm: FormGroup;
  titulo: string = "Cadastro";
  @Input()
  idLeilao: number;
  leilao: LeilaoData;
  messagemErro: any;
  _http: any;
  _baseUrl: string;

  constructor(private _fb: FormBuilder, private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private _router: Router,
    private activatedRoute: ActivatedRoute) {
    this._http = http;
    this._baseUrl = baseUrl;

    this.idLeilao = parseInt(activatedRoute.snapshot.paramMap.get("idLeilao"));

    this.leilaoForm = this._fb.group({
      idLeilao: 0,
      nome: ['', [Validators.required]],
      valorInicial: ['', [Validators.required]],
      indCondicaoUso: ['', [Validators.required]],
      dataDeAbertura: ['', [Validators.required]],
      dataDeFinalizacao: ['', [Validators.required]]
    })

    if (this.idLeilao > 0) {
      this.http.get<FormGroup>(this._baseUrl + "api/Leilao/Detalhar/" + this.idLeilao).subscribe(
        resp => {
          this.leilaoForm.setValue(resp);
        } ,
        error => this.messagemErro = error);
    }

  }

  salvar() {
    if (!this.leilaoForm.valid) {
      return;
    }
    if (this.idLeilao > 0) {
      this._http.put(this._baseUrl + 'api/Leilao/Editar', this.leilaoForm.value).subscribe(result => {
        this._router.navigate(['/buscar-leilao']);
      }, error => {
        console.error(error);
        this.messagemErro;
      });
    } else {
      this._http.post(this._baseUrl + 'api/Leilao/Salvar', this.leilaoForm.value).subscribe(result => {
        this._router.navigate(['/buscar-leilao']);
      }, error => {
        console.error(error);
        this.messagemErro;
      });
    }
  }

  cancelar() {
    this._router.navigate(['/buscar-leilao']);
  }


  get nome() { return this.leilaoForm.get('nome'); }
  get valorInicial() { return this.leilaoForm.get('valorInicial'); }
  get indCondicaoUso() { return this.leilaoForm.get('indCondicaoUso') }
  get dataDeAbertura() { return this.leilaoForm.get('dataDeAbertura') }
  get dataDeFinalizacao() { return this.leilaoForm.get('dataDeFinalizacao') }
}

interface LeilaoData {
  idLeilao: number;
  nome: string;
  valorInicial: number;
  indCondicaoUso: boolean;
  dataDeAbertura: string;
  dataDeFinalizacao: string;
}

