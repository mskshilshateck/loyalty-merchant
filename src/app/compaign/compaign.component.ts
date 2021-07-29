import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-compaign',
  templateUrl: './compaign.component.html',
  styleUrls: ['./compaign.component.sass']
})
export class CompaignComponent implements OnInit {
  confirmResult = null;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onBegin(){
    this.route.navigate(['newcompaign'])
  }

}
