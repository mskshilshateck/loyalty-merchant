import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaignComponent } from './compaign/compaign.component';
import { NewCompaignComponent } from './new-compaign/new-compaign.component';
import { SingleCompaignComponent } from './single-compaign/single-compaign.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BatchComponent } from './batch/batch.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    CompaignComponent,
    NewCompaignComponent,
    SingleCompaignComponent,
    DeliveryComponent,
    BatchComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
