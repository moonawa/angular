import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private _router: Router) { }
    private _Url = "http://localhost:8000/connexion";

    addUser(user){

      return this.http.post<any>(this._Url, user)
    }
}
