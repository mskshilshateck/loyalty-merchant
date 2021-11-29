import { Component, OnInit } from '@angular/core';
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../global/common.service';
import { UserapiService } from '../user/userapi.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-brand-request',
  templateUrl: './brand-request.component.html',
  styleUrls: ['./brand-request.component.sass'],
})
export class BrandRequestComponent implements OnInit {
  availableBrands: any;
  selectedBrand: string = '';
  name: string = '';

  brandModel: any = {
    name: '',
    image: '',
  };

  constructor(
    private router: Router,
    private modalService: NgbActiveModal,
    private commonService: CommonService,
    private userService: UserapiService
  ) {}

  ngOnInit(): void {}

  // onBegin() {

  //   this.modalService.dismissAll({
  //     ariaLabelledBy: 'modal-basic-title',
  //   });
  // }

  onfilechange() {
    let fileement = document.getElementById('document') as HTMLInputElement;
    fileement.click();
    fileement.onchange = () => {
      console.log(fileement.files);
    };
  }
  onAdd() {
      this.userService.createBrand(this.brandModel).subscribe(data=>{
        this.router.navigate(['/add-brand']);
      },(err) => this.commonService.toastNotification('Error', err, 'Danger'))
      this.modalService.close();
  }
}
