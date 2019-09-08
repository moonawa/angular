import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable(
)

export class AuthService {
  
  private _registerUrl = "http://localhost:8000/api/form/entreprise";
  private _loginUrl = "http://localhost:8000/api/connexion";
  private _Url = "http://localhost:8000/connexion";

  jwt:string;
  username:string;
  roles: Array<string>;
  
  constructor(private http: HttpClient,
    private _router: Router) {}
    
    registerUser(user){

      return this.http.post<any>(this._Url, user);
    }
    registerEntreprise(entreprise){
      return this.http.post<any>(this._registerUrl, entreprise);
    }

    loginUser(user){
      //return this.http.post<any>(this._loginUrl, user);
      //roles
      return this.http.post(this._loginUrl, user, {observe: 'response'});
    }

    /* loggedIn(){
      return !!localStorage.getItem('token')
    } */
  
    logoutUser(){
      localStorage.removeItem('token')
      this._router.navigate(['/login'])
    } 
    public getToken():string{
      var loc= localStorage.getItem('token');
      return loc;
    }

    //les roles, mon dieu aidez moi
    saveToken(jwt:string){
      localStorage.setItem('token', jwt);
      this.jwt=jwt;
      this.parseJWT();

    }
    
    parseJWT(){
      const jwtHelper = new JwtHelperService();
      const objWT= jwtHelper.decodeToken(this.jwt);
      this.username=objWT.obj;
      this.roles=objWT.roles;
      localStorage.setItem('role', objWT.roles);
      localStorage.setItem('username', objWT.username);
    }
    getRole(){
      return localStorage.getItem('role');
    }
   
    isSuper(){
      return this.roles.indexOf('ROLE_Super-admin')>=0;
    }

    isCaissier(){
      return this.roles.indexOf('ROLE_Caissier')>=0;
    }
    isUser(){
      return this.roles.indexOf('ROLE_utilisateur')>=0;
    }

    isAuthenticated(){
    return this.roles && (this.isSuper() || this.isCaissier() || this.isUser());

}

  }

  