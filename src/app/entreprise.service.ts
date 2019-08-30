import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(/* {
  providedIn: 'root'
} */)
export class EntrepriseService {

  private _entrepriseUrl: string  = "http://localhost:8000/api/liste";
  private _userUrl = "http://localhost:8000/api/list";
  
  constructor(private httpClient: HttpClient) {}

  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  
  getEntreprise(): Observable<any>{
    return this.httpClient.get<any>(this._entrepriseUrl, {headers:this.headers})
  }
  getUser(){
    return this.httpClient.get<any>(this._userUrl)
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
