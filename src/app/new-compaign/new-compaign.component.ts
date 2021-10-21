import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../global/common.service';
import { UserapiService } from '../user/userapi.service';

@Component({
  selector: 'app-new-compaign',
  templateUrl: './new-compaign.component.html',
  styleUrls: ['./new-compaign.component.sass']
})
export class NewCompaignComponent implements OnInit, OnDestroy {
  public model!: NgbDateStruct;
  public accordianActive: string = ""
  public accordianOutletStart: boolean = false
  public accordianSegmentStart: boolean = false
  public accordianRewardsStart: boolean = false
  public accordianScheduleStart: boolean = false
  campaignName: any = '';
  toggleTimer: boolean = false;
  brandOutletList: any;
  isTopCustome:boolean = false;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null = null;
  toDate: NgbDate | null = null;

  campaignModel: any = {
    campaignName:'',
    outletName: '',
    segment: '',
    segmentDetail: '',
    topCustomer:'',
    rewardName: '',
    rewardExpireDate: '',
    rewardMessage: '',
    campaignScheduledDate: '',
    delivery: '',
    timer: '',
  };

  constructor(
    private userService: UserapiService,
    private router: Router,
    private commonService: CommonService,
    private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) { }

  ngOnInit(): void {
    this.campaignName = localStorage.getItem('campaignName')!;
    this.campaignModel.campaignName = this.campaignName;

    this.getBrandOutlets()
  }

  setaccordianActive(accord: string) {
    this.accordianActive = accord
  }

  setaccordianState(active: string) {

    this.accordianOutletStart = !this.accordianOutletStart

    this.accordianSegmentStart = !this.accordianSegmentStart

    this.accordianRewardsStart = !this.accordianRewardsStart

    this.accordianScheduleStart = !this.accordianScheduleStart

  }

  onSaveCampaign() {
     this.userService.createCampaign(this.campaignModel).subscribe(data => {
       this.router.navigate(['campaign']);
    },(err) => this.commonService.toastNotification('Error',err,'Danger'))
  }

  getBrandOutlets() {
    let brandId = localStorage.getItem('brandId');
    this.userService.getBrandOutlets(brandId).subscribe((response: any) => {
      this.brandOutletList = response.data.brandOutlet;
    })
  }

  toggleTime() {
    this.toggleTimer = !this.toggleTimer;
  }

  clicked() {
    console.log("called");
  }

  setTopCustomer(topCustomer: string) {
    if (topCustomer != "custom")
      this.campaignModel.segmentDetail = topCustomer
    else
      this.isTopCustome =true;

  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  selectOutlet(outletName:String) {
    this.campaignModel.outletName = outletName;
  }

  ngOnDestroy() {
    localStorage.removeItem('campaignName');
  }
}
/* function catchError(handleError: (error: any) => import("rxjs").Observable<never>): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
} */

