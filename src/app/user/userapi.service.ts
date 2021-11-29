import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Merchant } from "./userapi.interface"
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserapiService {
  apiURL: string = 'http://143.198.150.38:9071/api/v1';

  loggedUserSessionToken: any;

  constructor(private http: HttpClient) {}

  handleError(error: any) {
    let errorMessage = '';
    errorMessage = error.error.message;

    return throwError(errorMessage);
  }

  loginMerchant(body: Merchant): Observable<HttpResponse<any>> {
    return this.http.post(`${this.apiURL}/Vender/login`, body, {
      observe: 'response',
    });
  }

  registerMerchant(body: Merchant): Observable<HttpResponse<any>> {
    return this.http.post(`${this.apiURL}/vender/registerVender`, body, {
      observe: 'response',
    });
  }

  verifyCode(body: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.apiURL}/Vender/verifyOtp`, body, {
      observe: 'response',
    });
  }

  resendCode(body: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.apiURL}/Vender/sendOtp`, body, {
      observe: 'response',
    });
  }

  getProfile(token: string) {
    return this.http.get(`${this.apiURL}/Vender/getProfile`, {
      headers: this.getHeader(),
    });
  }

  updateMerchantProfile(token: string, body: Object) {
    return this.http.put(`${this.apiURL}/Vender/updateProfile`, body, {
      headers: this.getHeader(),
    });
  }

  updatePassword(token: string, body: Object) {
    return this.http.post(`${this.apiURL}/Vender/changePassword`, body, {
      headers: this.getHeader(),
    });
  }

  // API for campaign & brand

  createCampaign(body: Object) {
    return this.http.post(`${this.apiURL}/Vender/createCampaign`, body, {
      headers: this.getHeader(),
    });
  }

  getAllCampaign() {
    return this.http.get(`${this.apiURL}/Vender/getAllCampaign`, {
      headers: this.getHeader(),
    });
  }

  getCampaignById(id: string) {
    return this.http.get(`${this.apiURL}/Vender/getCampaignById/${id}`, {
      headers: this.getHeader(),
    });
  }

  //API for brands

  getbrands() {
    return this.http.get(`${this.apiURL}/Vender/getAllBrand`, {
      headers: this.getHeader(),
    });
  }

  createBrand(body: Object) {
    return this.http.post(`${this.apiURL}/Vender/createBrand`, body, {
      headers: this.getHeader(),
    });
  }

  getBrandOutlets(brandId: any) {
    return this.http.get(`${this.apiURL}/Vender/getBrandOutlets/${brandId}`, {
      headers: this.getHeader(),
    });
  }
  getPlans() {
    return this.http.get(`${this.apiURL}/Vender/getAllPlans`, {
      headers: this.getHeader(),
    });
  }

  //getter function for header
  getHeader() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'bearer ' + localStorage.getItem('token'));

    return headers;
  }
}
