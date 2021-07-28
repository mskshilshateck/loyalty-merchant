import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { UserapiService } from '../user/userapi.service'
import { CommonService } from '../global/common.service'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  public firstName : string ="";
  public lastName: string ="";
  public email: string ="";
  public mobileNumber: string =""
  public token : any = localStorage.getItem('token')
  public userDetail: any = {}
  constructor(private UserapiService: UserapiService, private CommonService: CommonService) { }

  ngOnInit(): void {
    let buttn = document.querySelector('#updateBtn') 
    buttn?.addEventListener('click', function(event) {
      event.preventDefault();
    });
    this.UserapiService.getProfile(this.token).pipe(catchError(this.UserapiService.handleError)).subscribe((data) =>{this.userDetail = data})
  }
  updateProfile(){
    let params = {
      firstName: this.firstName !== "" ? this.firstName : this.userDetail.data.firstName,
      lastName: this.lastName !== ""? this.lastName : this.userDetail.data.lastName,
      phoneNo: this.mobileNumber !== ""? this.mobileNumber : this.userDetail.data.phoneNo,
      email: this.email !== ""? this.email : this.userDetail.data.email
    }
    this.UserapiService.updateMerchantProfile(this.token,params).subscribe((data) => this.CommonService.toastNotification('Success','Profile Update SuccessFully','Success'),(err) => this.CommonService.toastNotification('Danger',err,'danger'))
  }
  onChange(name:string,e:any){
    switch (name) {
      case 'firstname':
        this.firstName = e.target.value
        break;
      case 'lastname':
        this.lastName = e.target.value
        break;
      case 'email':
        this.email = e.target.value
        break;
      case 'mobileNumber':
        this.mobileNumber = e.target.value
        break;
    
      default:
        break;
    }
  }
}
