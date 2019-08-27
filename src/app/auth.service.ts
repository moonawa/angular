import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable()

export class AuthService {
  
  private _registerUrl = "http://localhost:8000/api/register";
  private _loginUrl = "http://localhost:8000/api/connexion";
  
  constructor(private http: HttpClient) { }
    
    registerUser(user){

      return this.http.post<any>(this._registerUrl, user)
    }

    loginUser(user){
      return this.http.post<any>(this._loginUrl, user)
    }
  
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 