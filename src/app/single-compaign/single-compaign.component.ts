import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../global/common.service';
import { UserapiService } from '../user/userapi.service';

@Component({
  selector: 'app-single-compaign',
  templateUrl: './single-compaign.component.html',
  styleUrls: ['./single-compaign.component.sass']
})
export class SingleCompaignComponent implements OnInit, OnDestroy {

  campaignId: string = '';
  campaignData: any = [];

  constructor(private UserService: UserapiService,private commonService: CommonService, private location: Location) { }

  ngOnInit(): void {
    this.campaignId = localStorage.getItem('campaignId')!;
    this.getCampaingDetailById(this.campaignId);
  }

  ngOnDestroy() {
    localStorage.removeItem('campaignId');
  }

  getCampaingDetailById(id: string) {
    this.UserService.getCampaignById(id).subscribe((response: any) => {
      this.campaignData = response.data[0];
    }, (err) => this.commonService.toastNotification('Error', err, 'Danger'))
  }

  onBack() {
    this.location.back();
  }
}
