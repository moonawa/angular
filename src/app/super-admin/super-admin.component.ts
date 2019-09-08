import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  imageUrl : string ="assets/awaimg/MOON.png";
  fileToUpload : File = null;
 
  constructor(private _super: UserService,
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
     this._super.addSuper(data , this.fileToUpload)
     .subscribe(
       data=>{
         console.log('done');
         
        //  this.utilisateur=null;
        //  this.fileToUpload=null;
         //this._router.navigate(['/user'])

       }, err=>{
        console.log(err);
       }
     )

}
  super = new FormGroup({
  RaisonSociale: new FormControl('', [Validators.required, Validators.minLength(5)]),

  Ninea: new FormControl ('', Validators.required),
Adresse:  new FormControl ('', Validators.required),
    plainPassword: new FormControl ('', Validators.required),
      Profil: new FormControl ('', Validators.required),

//plainPassword: new FormControl ('', Validators.required),

username: new FormControl ('', Validators.required),

Nom: new FormControl ('', Validators.required),

     email: new FormControl ('', Validators.required),

Nci: new FormControl ('', Validators.required),
telephone:  new FormControl ('', [Validators.required, Validators.minLength(9),Validators.maxLength(9),Validators.pattern(
  /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
Solde: new FormControl ('', Validators.required)


  })

  errorMessage={
    'RaisonSociale':[
     {type:'required', message:'Champ username obligatoire '},
     {type:'minlength', message:'veuillez saisir au minimum 5 lettres'}

    ],
    'Ninea ':[
     {type:'required', message:'Champ telephone obligatoire '},
    ],
    'Adresse':[
     {type:'required', message:'Champ nom obligatoire '},
     {type:'minlength', message:'veuillez saisir au minimum 3 lettres'},
     {type:'pattern', message:'Ecrivez correctement le nom'}

    ],
   /*  'plainPassword':[
     {type:'required', message:'Champ password obligatoire '}
    ], */
    'username':[
     {type:'required', message:'Champ profil est  obligatoire '}

    ],
    'Nom':[
      {type:'required', message:'Champ email obligatoire '}
     ],
     'email':[
      {type:'required', message:'Champ nci obligatoire '}
     ],
     'Nci':[
      {type:'required', message:'Champ entreprise obligatoire '}
     ],
     'telephone':[
      {type:'required', message:'Champ entreprise obligatoire '}
     ],
     'Solde':[
      {type:'required', message:'Champ entreprise obligatoire '}
     ]
  }
}

