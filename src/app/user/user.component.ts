import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = []
  constructor(private _entrepriseService: EntrepriseService) { }

  ngOnInit() {
    this._entrepriseService.getUser()
    .subscribe(
      res => this.user = res,
      err =>console.log(err)
    )
  }

}
