import { Component } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-projet';

  constructor(private _auth: AuthService){}

  isSuper(){
    return this._auth.isSuper();
  }
  isCaissier(){
    return this._auth.isCaissier();
  }
  isUser(){
    return this._auth.isUser();
  }
  isAuthenticated(){
    return this._auth.isAuthenticated();
  } 
}
