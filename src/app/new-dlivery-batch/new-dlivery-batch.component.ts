import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {BatchGeneratedComponent} from "../batch-generated/batch-generated.component"
@Component({
  selector: 'app-new-dlivery-batch',
  templateUrl: './new-dlivery-batch.component.html',
  styleUrls: ['./new-dlivery-batch.component.sass']
})
export class NewDliveryBatchComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  onBegin() {
   
    this.modalService.open(BatchGeneratedComponent,{
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
