import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent} from './entreprise/entreprise.component';
import { UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';
import { FormsComponent } from './forms/forms.component';
import { RetraitComponent } from './retrait/retrait.component';

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
    path: 'retrait',
    component: RetraitComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'add-entreprise',
    component: AddEntrepriseComponent
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
    path: 'depot',
    component: DepotComponent
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
