import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

// controlar e lidar com injeções de dependência -> registrar no module/providers
@Injectable()
export class ProdutoService {

constructor(private http: HttpClient ) {}

    //protected: permite acesso às classes filhas, mas proíbe a qualquer outro acesso externo
    protected UrlServiceV1: string = "http://localhost:3000/";


    //O module de 'HttpClient' nos permite buscar dados de uma fonte externa,
    // como em um database. Ele requer que usemos o Subscribe usando o Observable para ter o retorno.
    obterProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}