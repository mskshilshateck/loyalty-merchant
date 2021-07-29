import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-campgin-request',
  templateUrl: './campgin-request.component.html',
  styleUrls: ['./campgin-request.component.sass'],
})
export class CampginRequestComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}
  onBegin() {
    this.router.navigate(['newcompaign']);
    this.modalService.dismissAll({
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
