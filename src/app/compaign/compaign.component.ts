import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { catchError } from 'rxjs/operators';
import { CampginRequestComponent } from '../campgin-request/campgin-request.component';
import { CommonService } from '../global/common.service';
import { UserapiService } from '../user/userapi.service';
@Component({
  selector: 'app-compaign',
  templateUrl: './compaign.component.html',
  styleUrls: ['./compaign.component.sass'],
})
export class CompaignComponent implements OnInit {
  confirmResult = null;
  allCampaign: any;
  availableBrands: any;
  selectedBrand:string = '';

  constructor(
    private route: Router, 
    private modalService: NgbModal,
    private UserService: UserapiService,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.getCampaign();
    this.getBrands();
  }

  onBegin() {
    this.modalService.open(CampginRequestComponent, {
      ariaLabelledBy: 'modal-basic-title', centered: true
    });
  }

  onCampaignDetail(id: string) {
    localStorage.setItem("campaignId", id);
    this.route.navigateByUrl('/singlecompaign');
  }

  getCampaign() {
    this.UserService.getAllCampaign().pipe(catchError(this.UserService.handleError)).subscribe((response: any) => {
      this.allCampaign = response.data.campaign;
    }, (err) => this.commonService.toastNotification('Error', err, 'Danger'));
  }

  getBrands() {
    this.UserService.getbrands().pipe(catchError(this.UserService.handleError)).subscribe((response: any) => {
      this.availableBrands = response.data.brand;
    }, (err) => this.commonService.toastNotification('Error', err, 'Danger'));
  }

  selectBrand(brand:any) {
    localStorage.setItem('brandId', brand._id);
    this.selectedBrand = brand.name;
  }
}
