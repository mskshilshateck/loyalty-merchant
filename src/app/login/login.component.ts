import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {UserapiService} from "../user/userapi.service"
import { CommonService } from "../global/common.service"
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public email: string ="";
  public password: string ="";
  userDetail: any = {};
  constructor(private UserService: UserapiService, private CommonService: CommonService, private store: Store,private router: Router) { 
    this.userDetail = this.store.select(state => state).subscribe(data => data)
    
  }

  ngOnInit(): void {
    let buttn = document.querySelector('#loginBtn') 
    buttn?.addEventListener('click', function(event) {
      event.preventDefault();
    });
  }
  LoginMerchant(): void{
    let params = {email:this.email,password:this.password}
    this.UserService.loginMerchant(params).pipe(catchError(this.UserService.handleError)).subscribe(data => {
      this.CommonService.toastNotification('Success',data.body.message,'Success')
      localStorage.setItem('token',data.body.data.accessToken)
      this.router.navigate(['/add-brand'])
    },(err) => this.CommonService.toastNotification('Error',err,'Danger'))
  }
  onChangeEmail(e:any){
    return this.email = e.target.value
  }
  onChangePassword(e: any){
    return this.password = e.target.value
  }
}
