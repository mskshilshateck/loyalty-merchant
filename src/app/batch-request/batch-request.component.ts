import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-batch-request',
  templateUrl: './batch-request.component.html',
  styleUrls: ['./batch-request.component.sass'],
})
export class BatchRequestComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}
  onBegin() {
    this.router.navigate(['newdeliverybatch']);
    this.modalService.dismissAll({
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
