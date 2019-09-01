import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import {EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit {

  entreprise={};

  constructor(private _entreprise: EntrepriseService,
    private _router: Router) { }

  ngOnInit() {
  }
  onsubmit (data:any){
    console.log(data);
    //console.log(this.fileToUpload);
     this._entreprise.addEntreprise(data)
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
