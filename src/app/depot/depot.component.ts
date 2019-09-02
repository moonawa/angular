import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import {EntrepriseService } from '../entreprise.service';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  depot={};
  constructor(private _depot: EntrepriseService,
    private _router: Router) { }

  ngOnInit() {
  }

  onsubmit (data:any){
    console.log(data);
    //console.log(this.fileToUpload);
     this._depot.addDepot(data)
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
