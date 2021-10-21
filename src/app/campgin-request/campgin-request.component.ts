import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../global/common.service';
import { UserapiService } from '../user/userapi.service';

@Component({
  selector: 'app-campgin-request',
  templateUrl: './campgin-request.component.html',
  styleUrls: ['./campgin-request.component.sass'],
})
export class CampginRequestComponent implements OnInit {

  constructor(
    private router: Router,
    private modalService: NgbActiveModal,
    ) {}

  ngOnInit(): void {}
  
  onBegin(campaignForm: NgForm) {
    localStorage.setItem('campaignName', campaignForm.value.campaignName)
    this.modalService.close();
    this.router.navigate(['newcompaign']);
   
  }

  close() {
    this.modalService.close();
  }
}
