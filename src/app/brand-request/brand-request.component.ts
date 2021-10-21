import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand-request',
  templateUrl: './brand-request.component.html',
  styleUrls: ['./brand-request.component.sass']
})
export class BrandRequestComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  onBegin() {
  
    this.modalService.dismissAll({
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  onfilechange(){
    let fileement = document.getElementById("document") as HTMLInputElement
    fileement.click();
    fileement.onchange = () => {
      console.log(fileement.files)
    }
  }
  onAdd(){
    this.router.navigate(['/dashboard'])
  }

}
