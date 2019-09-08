import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent} from './entreprise/entreprise.component';
import { UserComponent} from './user/user.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';

import { AddUserComponent } from './add-user/add-user.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';
import { FormsComponent } from './forms/forms.component';
import { RetraitComponent } from './retrait/retrait.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { NavComponent } from './nav/nav.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { CompteAdminComponent } from './compte-admin/compte-admin.component';
import { UserCompteComponent } from './user-compte/user-compte.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
    path: 'user-admin',
    component: UserAdminComponent
  },
  {
    path: 'compte-admin',
    component: CompteAdminComponent
  },
  {
    path: 'user-compte',
    component: UserCompteComponent
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
    path: 'super-admin',
    component: SuperAdminComponent
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
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'user',
    component: UserComponent
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
