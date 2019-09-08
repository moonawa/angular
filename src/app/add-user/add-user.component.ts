import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'] 
})
export class AddUserComponent implements OnInit {
  
 Profils;
  //user={};
  imageUrl : string ="assets/awaimg/MOON.png";
  fileToUpload : File = null;
 
  constructor(private _user: UserService,
    private _use: AuthService,
    private _router: Router) {}

  ngOnInit() {
    this._user.getAllProfil().subscribe(
      res=>{
        console.log(res);
        this.Profils=res
        if(this._use.getRole()=='Role_Super-admin' || this._use.getRole()=='Role_Caissier'
        ){
          this.Profils=[this.Profils[0],this.Profils[1]]
        }
        else if(this._use.getRole()=='Role_utilisateur' ){
          this.Profils=[this.Profils[2]]
        }

      }, err=>{
        console.log(err);
      }
    );
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
  user = new FormGroup({
  username : new FormControl('', [Validators.required, Validators.minLength(5)]),
  Telephone: new FormControl ('', [Validators.required, Validators.minLength(9),Validators.maxLength(9),Validators.pattern(  
    /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
  Nom: new FormControl ('', [Validators.required, Validators.minLength(3),
    Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]),
    plainPassword: new FormControl ('', [Validators.required, Validators.minLength(2)]),
      Profil: new FormControl ('', Validators.required),
      Email: new FormControl ('', Validators.required),
      Nci: new FormControl ('', Validators.required)

    
  })

  errorMessage={
    'username':[
     {type:'required', message:'Champ username obligatoire '},
     {type:'minlength', message:'veuillez saisir au minimum 5 lettres'}

    ],
    'Telephone ':[
     {type:'required', message:'Champ telephone obligatoire '},
    ],
    'Nom':[
     {type:'required', message:'Champ nom obligatoire '},
     {type:'minlength', message:'veuillez saisir au minimum 3 lettres'},
     {type:'pattern', message:'Ecrivez correctement le nom'}

    ],
    'plainPassword':[
     {type:'required', message:'Champ password obligatoire '}
    ],
    'Profil':[
     {type:'required', message:'Champ profil est  obligatoire '}

    ],
    'Email':[
      {type:'required', message:'Champ email obligatoire '}
     ],
     'Nci':[
      {type:'required', message:'Champ nci obligatoire '}
     ]
  }
}
