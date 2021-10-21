import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaignComponent } from './compaign/compaign.component';
import { NewCompaignComponent } from './new-compaign/new-compaign.component';
import { 
  AuthguardService as AuthGuard 
} from './auth/authguard.service';

import { SingleCompaignComponent } from './single-compaign/single-compaign.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BatchComponent } from './batch/batch.component';
import { SettingsComponent } from './settings/settings.component';
import { NewDliveryBatchComponent } from './new-dlivery-batch/new-dlivery-batch.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandOutletsComponent } from './brand-outlets/brand-outlets.component';
import { RegisterComponent } from './register/register.component';
import { NewBrandComponent } from './new-brand/new-brand.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
    
  },
  {
    path: 'login',
    component: LoginComponent
    
  },
  {
    path: 'register',
    component: RegisterComponent
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'campaign',
    component: CompaignComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'newcompaign',
    component: NewCompaignComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'singlecompaign',
    component: SingleCompaignComponent,
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'batch',
    component: BatchComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'newdeliverybatch',
    component: NewDliveryBatchComponent,
  },
  {
    path: 'brandlist',
    component: BrandListComponent,
  },
  {
    path: 'brandoutlets',
    component: BrandOutletsComponent,
  },
  {
    path: 'add-brand',
    component: NewBrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
