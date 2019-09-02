import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { EditEntrepriseComponent } from './edit-entreprise/edit-entreprise.component';
import { DeleteEntrepriseComponent } from './delete-entreprise/delete-entreprise.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { EntrepriseService } from './entreprise.service';
import { UserComponent} from './user/user.component';

import { AuthGuard} from './auth.guard';
import { RegisterComponent } from './register/register.component';

import { TokenInterceptorService } from './token-interceptor.service';
import { from } from 'rxjs';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './user.service';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';


@NgModule({
  declarations: [
    AppComponent,
    EntrepriseComponent,
    AddEntrepriseComponent,
    EditEntrepriseComponent,
    DeleteEntrepriseComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
   
    ListEntrepriseComponent,
    AddUserComponent,
    TransactionComponent,
    DepotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, EntrepriseService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
