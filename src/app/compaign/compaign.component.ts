import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CampginRequestComponent } from '../campgin-request/campgin-request.component';
@Component({
  selector: 'app-compaign',
  templateUrl: './compaign.component.html',
  styleUrls: ['./compaign.component.sass'],
})
export class CompaignComponent implements OnInit {
  confirmResult = null;

  constructor(private route: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}

  onBegin() {
    this.modalService.open(CampginRequestComponent, {
      ariaLabelledBy: 'modal-basic-title', centered: true
    });
  }
}
