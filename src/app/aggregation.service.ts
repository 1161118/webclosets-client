import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Aggregation} from './aggregation';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AggregationService {
  private aggregationURL = 'https://webclosets.azurewebsites.net/api/aggregation/';

  getAggregations(): Observable<Aggregation[]> {


    this.http.get(this.aggregationURL).subscribe(responseData => console.log(responseData));
    return this.http.get<Aggregation[]>(this.aggregationURL);
  }

  getAggregation(idAgg): Observable<Aggregation> {
    const aggG = this.aggregationURL + idAgg;
    return this.http.get<Aggregation>(aggG);
  }

  deleteAggregation(idAgg): Observable<Aggregation> {
    const aggG = this.aggregationURL + idAgg;
    return this.http.delete<Aggregation>(aggG);
  }

  postAggregation(a: JSON): any {
    return this.http.post<string>(this.aggregationURL, a);
  }

  putAggregation(id, i: JSON): any {
    return this.http.put<string>(this.aggregationURL + '' + id, i, httpOptions);
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

