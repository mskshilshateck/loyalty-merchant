import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaignComponent } from './compaign/compaign.component';
import { NewCompaignComponent } from './new-compaign/new-compaign.component';
import { 
  AuthguardService as AuthGuard 
} from './auth/authguard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'compaign',
    component: CompaignComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'newcompaign',
    component: NewCompaignComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
