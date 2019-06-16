import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeilaoServico {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    obterLeiloes() {
        return this._http.get(this.myAppUrl + 'api/Leilao/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    obterLeilaoPorId(idLeilao) {
        return this._http.get(this.myAppUrl + "api/Leilao/Detalhar/" + idLeilao)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    salvarLeilao(leilao) {
        return this._http.post(this.myAppUrl + 'api/Leilao/Salvar', leilao)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    atualizarLeilao(leilao) {
        return this._http.put(this.myAppUrl + 'api/Leilao/Editar', leilao)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    deletarLeilao(idLeilao) {
        return this._http.delete(this.myAppUrl + 'api/Leilao/Deletar/' + idLeilao)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
