import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { EditEntrepriseComponent } from './edit-entreprise/edit-entreprise.component';
import { DeleteEntrepriseComponent } from './delete-entreprise/delete-entreprise.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { EntrepriseService } from './entreprise.service';

import { AuthGuard} from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    EntrepriseComponent,
    AddEntrepriseComponent,
    EditEntrepriseComponent,
    DeleteEntrepriseComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, EntrepriseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
