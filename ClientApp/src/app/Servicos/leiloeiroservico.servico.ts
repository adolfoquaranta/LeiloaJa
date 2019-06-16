import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeiloeiroServico {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    obterLeiloeiros() {
        return this._http.get(this.myAppUrl + 'api/Leiloeiro/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    obterLeiloeiroPorId(idLeiloeiro) {
        return this._http.get(this.myAppUrl + "api/Leiloeiro/Detalhar/" + idLeiloeiro)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    salvarLeiloeiro(leiloeiro) {
        return this._http.post(this.myAppUrl + 'api/Leiloeiro/Salvar', leiloeiro)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    atualizarLeiloeiro(leiloeiro) {
        return this._http.put(this.myAppUrl + 'api/Leiloeiro/Editar', leiloeiro)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    deletarLeiloeiro(idLeiloeiro) {
        return this._http.delete(this.myAppUrl + 'api/Leiloeiro/Deletar/' + idLeiloeiro)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
