import { Component, OnInit } from '@angular/core';
import { CommonService } from '../global/common.service';
import { UserapiService } from '../user/userapi.service';
import { catchError } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BrandRequestComponent } from '../brand-request/brand-request.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-brand',
  templateUrl: './new-brand.component.html',
  styleUrls: ['./new-brand.component.sass'],
})
export class NewBrandComponent implements OnInit {
  
  availableBrands: any;
  selectedBrand:string = '';

  constructor(private router: Router, private modalService: NgbModal , private UserService: UserapiService,
    private commonService: CommonService) {
    
  }
  ngOnInit(): void {
   this.getBrands();
  }
  // onBegin() {
  
  //   this.modalService.dismissAll({
  //     ariaLabelledBy: 'modal-basic-title',
  //   });
  // }

  // onfilechange(){
  //   let fileement = document.getElementById("document") as HTMLInputElement
  //   fileement.click();
  //   fileement.onchange = () => {
  //     console.log(fileement.files)
  //   }
  // }
  // onAdd(){
  //   this.router.navigate(['/dashboard'])
  // }
  getBrands() {
    this.UserService.getbrands().pipe(catchError(this.UserService.handleError)).subscribe((response: any) => {
      this.availableBrands = response.data.brand;
    }, (err) => this.commonService.toastNotification('Error', err, 'Danger'));
  }

  selectBrand(brand:any) {
    localStorage.setItem('brandId', brand._id);
    this.selectedBrand = brand.name;
  }

  onBegin() {
    this.modalService.open(BrandRequestComponent, {
      ariaLabelledBy: 'modal-basic-title', centered: true
    });
  }

}
