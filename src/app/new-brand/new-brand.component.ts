import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BrandRequestComponent } from '../brand-request/brand-request.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-brand',
  templateUrl: './new-brand.component.html',
  styleUrls: ['./new-brand.component.sass'],
})
export class NewBrandComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}
  selectedBrand:string = '';
  ngOnInit(): void {
   
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
