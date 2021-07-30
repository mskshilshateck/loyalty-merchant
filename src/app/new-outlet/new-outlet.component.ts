import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-outlet',
  templateUrl: './new-outlet.component.html',
  styleUrls: ['./new-outlet.component.sass']
})
export class NewOutletComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }


  ngOnInit(): void {
  }
  onBegin() {

    this.modalService.dismissAll({
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
