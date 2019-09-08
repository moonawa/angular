import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  loginUser(user){
    this._auth.loginUser(user)
    .subscribe(
      res => {
        console.log(res)
        //localStorage.setItem('token', res.token)
        let jwt = res.body['token'];
        this._auth.saveToken(jwt);
        
        this._router.navigate(['/add-user'])
      },
      err =>{console.log(err)}
    )
  }  
  
  
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
