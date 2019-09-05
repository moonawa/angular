import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(/* {
  providedIn: 'root'
} */)
export class UserService {
  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  private _userUrl: string  = "http://localhost:8000/api/list";
  
  
  constructor(private http: HttpClient,
    private _router: Router) { }
    private _Url : string = "http://localhost:8000/api/list";

    
    getAllProfil() : Observable<any[]>  {
      return  this.http.get<any>(this._Url);
   }
   getUser(){
    return this.http.get<any>(this._userUrl, {headers:this.headers})

   }
      
   addUser(user, fileToUpload){
    const headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

     const host = "http://localhost:8000/api/register";
   
     const formData: FormData= new FormData();
     formData.append('username', user.username);
     formData.append('plainPassword', user.plainPassword);
     formData.append('Entreprise', user.Entreprise);
     formData.append('Nom', user.Nom);
     formData.append('Email', user.Email);
     formData.append('Telephone', user.Telephone);
     formData.append('Nci', user.Nci);
     formData.append('Profil', user.Profil);
     formData.append('imageName', fileToUpload, fileToUpload.name);
     return this.http.post(host, formData, {headers : headers});
   }
   
}