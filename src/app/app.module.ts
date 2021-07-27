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
    NewCompaignComponent
  ],
  imports: [
    BrowserModule,
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
    JwtModule.forRoot({config:JWT_Module_Options})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
