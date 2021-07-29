import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Merchant } from "./userapi.interface"
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  apiURL: string = 'http://ss.stagingsdei.com:9071/api/v1';
  constructor(private http: HttpClient) { }
  handleError(error:any) {
    let errorMessage = '';
    console.log(error.error.message,"error")
    errorMessage = error.error.message;
    
    console.log(errorMessage);
    return throwError(errorMessage);
  }
loginMerchant(body: Merchant): Observable<HttpResponse<any>>{
  return  this.http.post(`${this.apiURL}/Vender/login`,body,{observe: 'response'})
  }
getProfile(token: string){
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization',token)
  return this.http.get(`${this.apiURL}/Vender/getProfile`, {'headers':headers})
}
updateMerchantProfile(token:string,body: Object){
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization',token)
  return this.http.put(`${this.apiURL}/Vender/updateProfile`,body,{headers:headers})
}
updatePassword(token:string,body: Object){
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization',token)
  return this.http.post(`${this.apiURL}/Vender/changePassword`,body,{headers:headers})
}
}
