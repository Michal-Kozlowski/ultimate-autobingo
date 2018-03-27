import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';

@Injectable()
export class DataService {
  errorMessage: string;

  constructor(private _http: HttpClient) { }

  sendNumber(url, body): Observable<any> {
    return this._http.post<any>(url, body)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
