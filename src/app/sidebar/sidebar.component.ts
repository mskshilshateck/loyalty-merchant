import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  public token = localStorage.getItem('token')
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public logout(){
    localStorage.removeItem('token')
    this.router.navigate([''])
  }
}
