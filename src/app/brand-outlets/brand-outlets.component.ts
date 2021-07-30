import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewOutletComponent } from '../new-outlet/new-outlet.component';
@Component({
  selector: 'app-brand-outlets',
  templateUrl: './brand-outlets.component.html',
  styleUrls: ['./brand-outlets.component.sass']
})
export class BrandOutletsComponent implements OnInit {

  constructor(private modalservice: NgbModal) { }


  ngOnInit(): void {
  }
  onBegin() {
    this.modalservice.open(NewOutletComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
