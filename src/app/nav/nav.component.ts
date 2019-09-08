import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
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
  ngOnInit() {
  }

}
