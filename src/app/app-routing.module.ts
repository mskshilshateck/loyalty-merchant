import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaignComponent } from './compaign/compaign.component';
import { NewCompaignComponent } from './new-compaign/new-compaign.component';
import { SingleCompaignComponent } from './single-compaign/single-compaign.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BatchComponent } from './batch/batch.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'compaign',
    component: CompaignComponent,
  },
  {
    path: 'newcompaign',
    component: NewCompaignComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
