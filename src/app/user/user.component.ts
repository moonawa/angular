import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = []
  constructor(private _entrepriseService: EntrepriseService,
    private _router: Router) { }

  ngOnInit() {
    this._entrepriseService.getUser()
    .subscribe(
      res => this.user = res,
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }
      }
    }
    )
  }

}
