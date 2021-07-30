import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-brand',
  templateUrl: './new-brand.component.html',
  styleUrls: ['./new-brand.component.sass'],
})
export class NewBrandComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}
  onBegin() {
  
    this.modalService.dismissAll({
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
