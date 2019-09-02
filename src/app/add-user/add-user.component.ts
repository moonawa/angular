import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
 // profils;
  user={};
  imageUrl : string ="assets/awaimg/MOON.png";
  fileToUpload : File = null;

 
  constructor(private _user: UserService,
    private _router: Router) {}

  ngOnInit() {
    
  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);

    //show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload); 
  }
  onsubmit (data:any){
    console.log(data);
    console.log(this.fileToUpload);
     this._user.addUser(data, this.fileToUpload)
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
