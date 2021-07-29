import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BatchRequestComponent } from '../batch-request/batch-request.component';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.sass'],
})
export class DeliveryComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  onBegin() {
    this.modalService.open(BatchRequestComponent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }
}
