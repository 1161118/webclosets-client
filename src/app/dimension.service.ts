import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Dimensions} from './dimensions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class DimensionService {
  private dimensionURL = 'https://webclosets.azurewebsites.net/api/dimensions/';

  getDimensions(): Observable<Dimensions[]> {


    this.http.get(this.dimensionURL).subscribe(responseData => console.log(responseData));
    return this.http.get<Dimensions[]>(this.dimensionURL);
  }

  getDimension(idDim): Observable<Dimensions> {
    const dimD = this.dimensionURL + idDim;
    return this.http.get<Dimensions>(dimD);
  }

  deleteDimension(idDim): Observable<Dimensions> {
    const dimD = this.dimensionURL + idDim;
    return this.http.delete<Dimensions>(dimD);
  }

  postDimension(d: JSON): any {
    return this.http.post<string>(this.dimensionURL, d, httpOptions);
  }

  putDimension(id, d: JSON): any {
    return this.http.put<string>(this.dimensionURL + '' +  id, d, httpOptions);
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
