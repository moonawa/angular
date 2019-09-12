import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import {EntrepriseService } from '../entreprise.service';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  
  cpt=[];
  depots=[];
  constructor(private _depot: UserService,
    private _router: Router,
   // private _userr: UserService,
    private _depotService:UserService ) {}


  ngOnInit() {
   /*  this._userr.getAllCompte().subscribe(
      res=>{
        console.log(res);
        this.cpt
        
        =res
        
      },
      err=>{
        console.log(err);
      }
    ); */
    /* this._depotService.getAllNocompte()
    .subscribe(
      res => this.depot = res,
      err => console.log(err)
    ) */
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
submitcompte(data:any){
  console.log(data);
       this._depotService.getAllNocompte(data)
   .subscribe(
     data=>{
      //console.log('code valide');
      this.cpt=data
    
     }, err=>{
      console.log(err);
     }
   )
 }
depot = new FormGroup({
  //Montant : new FormControl ('', Validators.required),
  noCompte : new FormControl ('', Validators.required)
})
}
