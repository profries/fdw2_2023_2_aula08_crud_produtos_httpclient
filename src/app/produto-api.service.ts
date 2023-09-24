import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';
const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

const BASE_API = "http://localhost:3000/produtos";

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {

 constructor(private http: HttpClient) { }

  getListaProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(BASE_API);
  }

  inserir(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(BASE_API, produto, httpOptions);
  }

  buscarPorId(id: number): Observable<Produto> {
    const uri = `${BASE_API}/${id}`;    
    return this.http.get<Produto>(uri);
  }

  editar(id: number, produto: Produto): Observable<Produto> {
    const uri = `${BASE_API}/${id}`; 
    return this.http.put(uri, produto, httpOptions);  
  }

  deletar(id?: number) {
    const uri = `${BASE_API}/${id}`;    
    return this.http.delete<Produto>(uri);
  }

}
