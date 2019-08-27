import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(/* {
  providedIn: 'root'
} */)
export class EntrepriseService {

  private _entrepriseUrl = "http://localhost:8000/api/list/entreprises";
  private _userUrl = "http://localhost:8000/api/liste/entreprises";
  

  constructor(private http: HttpClient) {}

  getEntreprise(){
    return this.http.get<any>(this._entrepriseUrl)
  }
  getUser(){
    return this.http.get<any>(this._userUrl)
  }
}
