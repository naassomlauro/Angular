import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()//aqui eu digo que ele pode ser injetado em uma classe
export class ProdutoServices{ //tem que registar esse serviço (ProdutoServices) no modulo app.module.ts
    constructor(private http: HttpClient){}
    protected UrlServiceV1: string = "http://localhost:3000/";



    //Usa o observable pois o get e uma consulta assincrona
    //pois não sabe a hora que o servidor vai retornar
    obterProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}