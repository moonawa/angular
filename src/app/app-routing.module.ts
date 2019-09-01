import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent} from './entreprise/entreprise.component';
import { UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/entreprise',
    pathMatch: 'full'
  },
  {
    path: 'entreprise',
    component: EntrepriseComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
