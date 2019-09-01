import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable(
)

export class AuthService {
  
  private _registerUrl = "http://localhost:8000/api/form/entreprise";
  private _loginUrl = "http://localhost:8000/api/connexion";
  private _Url = "http://localhost:8000/connexion";
  
  constructor(private http: HttpClient,
    private _router: Router) {}
    
    registerUser(user){

      return this.http.post<any>(this._Url, user)
    }
    registerEntreprise(entreprise){
      return this.http.post<any>(this._registerUrl, entreprise)
    }

    loginUser(user){
      return this.http.post<any>(this._loginUrl, user)
    }

    loggedIn(){
      return !!localStorage.getItem('token')
    }
  
    logoutUser(){
      localStorage.removeItem('token')
      this._router.navigate(['/entreprise'])
    }
    getToken(){
      return localStorage.getItem('token')
    }
  }

  