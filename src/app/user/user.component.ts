import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  utilisateur = []
  constructor(private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
    this._userService.getUser()
    .subscribe(
      res => this.utilisateur= res,
      err => console.log(err)
    )
  }

}
