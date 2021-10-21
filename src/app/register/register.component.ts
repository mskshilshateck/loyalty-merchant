import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../global/common.service';
import { UserapiService } from '../user/userapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  public name: string ="";
  public email: string ="";
  public password: string ="";
  isOtp: boolean = false;
  verificationCode!: number;

  userDetail: any = {};
  constructor(private UserService: UserapiService, private CommonService: CommonService, private store: Store,private router: Router) { 
    //this.userDetail = this.store.select(state => state).subscribe(data => data)
    
  }

  ngOnInit(): void {
    let buttn = document.querySelector('#loginBtn') 
    buttn?.addEventListener('click', function(event) {
      event.preventDefault();
    });
  }

  SignupMerchant(): void {
    let params = {name: this.name,email:this.email,password:this.password}

    this.UserService.registerMerchant(params).pipe(catchError(this.UserService.handleError)).subscribe(data => {

      this.CommonService.toastNotification('Success',data.body.message,'Success')
      this.isOtp = true;
      //localStorage.setItem('token',data.body.data.accessToken)
      //this.router.navigate(['login'])

    },(err) => this.CommonService.toastNotification('Error',err,'Danger'))
  }

  verifyCode() {
    let params = { email: this.email, secretCode: this.verificationCode }
    this.UserService.verifyCode(params).pipe(catchError(this.UserService.handleError)).subscribe(data => {

      this.CommonService.toastNotification('Success',data.body.message,'Success')
      localStorage.setItem('token',data.body.data.accessToken)
      this.router.navigate(['/add-brand'])

    },(err) => this.CommonService.toastNotification('Error',err,'Danger'))
  }

  resendCode() {
    let params = { email: this.email }
    this.UserService.resendCode(params).pipe(catchError(this.UserService.handleError)).subscribe(data => {

      this.CommonService.toastNotification('Success',data.body.message,'Success')
      //localStorage.setItem('token',data.body.data.accessToken)
      //this.router.navigate(['login'])

    },(err) => this.CommonService.toastNotification('Error',err,'Danger'))
  }

  onChangeName(e:any){
    return this.name = e.target.value
  }
  onChangeEmail(e:any){
    return this.email = e.target.value
  }
  onChangePassword(e: any){
    return this.password = e.target.value
  }
  onChangeverification(e: any) {
    return this.verificationCode = e.target.value;
  }
}
