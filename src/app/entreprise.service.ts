import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(/* {
  providedIn: 'root'
} */)
export class EntrepriseService {
  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  private _entrepriseUrl: string  = "http://localhost:8000/api/liste";
  //private _addUrl = "http://localhost:8000/api/form/entreprise";
  
  constructor(private http: HttpClient,
    private _router: Router) {}

  
  getEntreprise(): Observable<any>{
    return this.http.get<any>(this._entrepriseUrl, {headers:this.headers})
  }
  /* getUser(){
    return this.http.get<any>(this._addUrl)
  } */

  addEntreprise(entreprise){
    const headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

     const host = "http://localhost:8000/api/form/entreprise";
   
     const formData: FormData= new FormData();
     formData.append('RaisonSociale', entreprise.RaisonSociale);
     formData.append('Ninea', entreprise.Ninea);
     formData.append('Adresse', entreprise.Adresse);
     formData.append('email', entreprise.email);
     formData.append('telephone', entreprise.telephone);
     
     return this.http.post(host, formData, {headers:headers});
   }


 /*  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  } */
}
