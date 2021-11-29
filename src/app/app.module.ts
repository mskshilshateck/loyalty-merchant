import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaignComponent } from './compaign/compaign.component';
import { NewCompaignComponent } from './new-compaign/new-compaign.component';
import { ChartsModule } from 'ng2-charts';
import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule,
} from '@costlydeveloper/ngx-awesome-popup';
import { StoreModule } from '@ngrx/store';
import * as fromUserReducer from "./login/user.reducer"
import {JwtModule} from "@auth0/angular-jwt"
import { RouterModule } from '@angular/router';
import { SingleCompaignComponent } from './single-compaign/single-compaign.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { BatchComponent } from './batch/batch.component';
import { SettingsComponent } from './settings/settings.component';
import { ModalModule } from 'angular-custom-modal';
import { CampginRequestComponent } from './campgin-request/campgin-request.component';
import { BatchRequestComponent } from './batch-request/batch-request.component';
import { NewDliveryBatchComponent } from './new-dlivery-batch/new-dlivery-batch.component';
import { BatchGeneratedComponent } from './batch-generated/batch-generated.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandOutletsComponent } from './brand-outlets/brand-outlets.component';
import { NewBrandComponent } from './new-brand/new-brand.component';
import { NewOutletComponent } from './new-outlet/new-outlet.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BrandRequestComponent } from './brand-request/brand-request.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

const JWT_Module_Options: any = {
  config: {
      tokenGetter: tokenGetter(),
  }
};
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
    SettingsComponent,
    CampginRequestComponent,
    BatchRequestComponent,
    NewDliveryBatchComponent,
    BatchGeneratedComponent,
    BrandListComponent,
    BrandOutletsComponent,
    NewBrandComponent,
    NewOutletComponent,
    RegisterComponent,
    BrandRequestComponent,

  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    NgxAwesomePopupModule.forRoot({
      ColorList: {
        Success: '#3caea3', 
        Info: '#2f8ee5', 
        Warning: '#ffc107', 
        Danger: '#e46464', 
      },
    }),
    ToastNotificationConfigModule.forRoot({ GlobalSettings: {
      AllowedNotificationsAtOnce: 5
   }}),
   StoreModule.forRoot({user: fromUserReducer.reducer}),
    DialogConfigModule.forRoot(), // optional
    ConfirmBoxConfigModule.forRoot(),
    JwtModule.forRoot({config:JWT_Module_Options}),
    RouterModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
