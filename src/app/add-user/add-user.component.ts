import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  imageUrl : string ="assets/img/MOON.png";
  fileToUpload : File = null;

  adduserData = {}
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
}
