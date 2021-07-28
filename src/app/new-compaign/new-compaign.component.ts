import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-compaign',
  templateUrl: './new-compaign.component.html',
  styleUrls: ['./new-compaign.component.sass']
})
export class NewCompaignComponent implements OnInit {
  public accordianActive : string = ""
  public accordianOutletStart : boolean = false
  public accordianSegmentStart : boolean = false
  public accordianRewardsStart : boolean = false
  public accordianScheduleStart : boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  setaccordianActive(accord: string){
    this.accordianActive = accord
  }
  setaccordianState(active: string){
    console.log(this.accordianOutletStart,"active")
    
        this.accordianOutletStart = !this.accordianOutletStart
     
        this.accordianSegmentStart = !this.accordianSegmentStart
   
        this.accordianRewardsStart = !this.accordianRewardsStart
      
        this.accordianScheduleStart = !this.accordianScheduleStart

  }
}
