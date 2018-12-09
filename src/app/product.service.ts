import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Produto} from './produto';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL = 'https://webclosets.azurewebsites.net/api/product/';

  getProducts(): Observable<Produto[]> {


    return this.http.get<Produto[]>(this.productURL);
  }

  getProduct(idProduto): Observable<Produto> {
    const prodP = this.productURL + idProduto;
    return this.http.get<Produto>(prodP);
  }

  deleteProduct(idProduto): Observable<Produto> {
    const prodP = this.productURL + idProduto;
    return this.http.delete<Produto>(prodP);
  }

  postProduct(p: JSON): any {
    return this.http.post<string>(this.productURL, p, httpOptions);
  }

  putProduct(id, p: JSON): any {
    return this.http.put<string>(this.productURL + '' + id, p, httpOptions);
  }

  constructor(private http: HttpClient) {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
