import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  retrait= {};
  constructor(private _retrait: UserService,
    private _router: Router) { }

  ngOnInit() {
  }

  onsubmit (data:any){
    console.log(data);
    //console.log(this.fileToUpload);
     this._retrait.retirer(data)
     .subscribe(
       data=>{
         console.log('done');
         
        //  this.utilisateur=null;
        //  this.fileToUpload=null;
         //this.router.navigate(['/user'])
       }, err=>{
        console.log(err);
       }
     )

}
}
