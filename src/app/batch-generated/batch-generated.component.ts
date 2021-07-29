import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-batch-generated',
  templateUrl: './batch-generated.component.html',
  styleUrls: ['./batch-generated.component.sass'],
})
export class BatchGeneratedComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}
  onBegin() {
    this.router.navigate(['delivery']);
    this.modalService.dismissAll({
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
