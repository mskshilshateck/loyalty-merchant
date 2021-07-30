import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewBrandComponent } from '../new-brand/new-brand.component';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.sass'],
})
export class BrandListComponent implements OnInit {
  constructor(private modalservice: NgbModal) {}

  ngOnInit(): void {}
  onBegin() {
    this.modalservice.open(NewBrandComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
