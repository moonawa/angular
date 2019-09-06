import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transacton= {};
  constructor(private _transaction: UserService,
    private _router: Router) { }

  ngOnInit() {
  }

  onsubmit (data:any){
    console.log(data);
    //console.log(this.fileToUpload);
     this._transaction.envoi(data)
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
