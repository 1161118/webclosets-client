import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Item} from './item';
import { ItemComponent } from './item/item.component';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemURL = 'https://webclosets-order.herokuapp.com/api/item/';

  getItems(): Observable<Item[]> {
    this.http.get<Item[]>(this.itemURL).subscribe(resp => console.log(resp));

    return this.http.get<Item[]>(this.itemURL);
  }

  getItem(idItem): Observable<Item> {
    const item = this.itemURL + idItem;
    return this.http.get<Item>(item);
  }

  deleteItem(idItem): any {
    const itI = this.itemURL + idItem;
    return this.http.delete<Item>(itI);
  }

  postItem(i: JSON): any {
    return this.http.post<string>(this.itemURL, i, httpOptions);
  }

  putItem(idItem, i: JSON): any {
    return this.http.put<string>(this.itemURL + '' + idItem, i, httpOptions);
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
