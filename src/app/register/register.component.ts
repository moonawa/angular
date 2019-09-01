import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerEntrepriseData = {}
  constructor(private _auth: AuthService,
    private _router: Router) {}

  ngOnInit() {
  }
  entreprsie

  registerEntreprise(){
    this._auth.registerEntreprise(this.registerEntrepriseData)
     .subscribe(      
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/entreprise'])
        },
        err => console.log(err),   
    ) 
  }

}
