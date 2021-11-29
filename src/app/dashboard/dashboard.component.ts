import { Component, OnInit, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, Colors } from 'ng2-charts';
import { catchError } from 'rxjs/operators';
import { UserapiService } from "../user/userapi.service"
import { CommonService } from '../global/common.service';
import * as UserActions from '../login/user.action';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  public userDetail: any = {};
  public plans: any = {};
  public selectplan: any = {};
  public Branch: any = '';
  public feature: any = '';
  public onePlan: any = {};
  public subtotalAmount: any = '';
  public totalAmount: any = '';
  public activeId: any = 1;
  public noofBranch: any = '';
  public outletData: any = {};
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series C' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series D' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series E' },
  ];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [{}],
    },
    annotation: {},
  };
  public lineChartColors: Colors[] = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
    {
      // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  public barChartColors: Colors[] = [
    {
      backgroundColor: '#ECA536',
    },
    {
      backgroundColor: '#752075',
    },
    {
      backgroundColor: '#73CEF8',
    },
    {
      backgroundColor: '#91EB71',
    },
    {
      backgroundColor: '#D82C4F',
    },
  ];

  firstTimeLogin: boolean = true;
  isOpenPaymentTab: boolean = false;
  active = 1;
  constructor(
    private store: Store,
    private userservice: UserapiService,
    private CommonService: CommonService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    let token = localStorage.getItem('token') || '';
    this.activatedRoute.queryParams.subscribe(params => {
      this.isOpenPaymentTab = params['isOenpPaymentTab'];
      if (this.isOpenPaymentTab) {
        this.activeNextTab(3);
      }
    });
    this.userservice
      .getProfile(token)
      .pipe(catchError(this.userservice.handleError))
      .subscribe((data) => {
        this.userDetail = data;
      });
    this.userservice
      .getPlans()
      .pipe(catchError(this.userservice.handleError))
      .subscribe((data) => {
        this.plans = data;
        console.log(this.plans.data, 'planss');
      });
    // this.store.select(state => state).subscribe(data => this.userDetail = data)
  }
  public selectedPlan(plan: any) {
    this.onePlan = plan;
    this.selectplan = plan.addOnFeauture;
    console.log(this.selectplan);
  }
  public setBranch(e: any) {
    this.Branch = e.target.value;
    this.noofBranch = e.target.options[e.target.options.selectedIndex].text;
  }
  public setFeatures(e: any, featureName: any) {
    this.feature = { name: featureName, value: e.target.value };
    console.log(this.feature);
  }

  public subtotal(values: any) {
    this.subtotalAmount = parseInt(values.feature) + values.plan;
    return this.subtotalAmount;
  }

  public total(values: any) {
    this.totalAmount = parseInt(values.branch) + values.subtotal;
    return this.totalAmount;
  }

  public activeNextTab(value: any) {
    this.activeId = value;
  }

  public searchAddress(e: any) {
    return this.http
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}`
      )
      .pipe(catchError(this.userservice.handleError))
      .subscribe((data) => {
        this.userDetail = data;
      });
  }
  public setOutletData(e: any) {
    this.outletData = {
      ...this.outletData,
      [e.target.name]: e.target.value,
    };

    console.log(this.outletData, 'datat');
  }
  onfile1change() {
    let fileement = document.getElementById('document1') as HTMLInputElement;
    fileement.click();
    fileement.onchange = () => {
      console.log(fileement.files);
    };
  }
  onfile2change() {
    let fileement = document.getElementById('document2') as HTMLInputElement;
    fileement.click();
    fileement.onchange = () => {
      console.log(fileement.files);
    };
  }
  public updateVendorPlan() {
    let params = {
      paymentAmount: this.totalAmount,
      paymentStatus: 'Pending',
      numberofbranches: this.noofBranch,
      selectedPlan: this.onePlan._id,
      insights: this.feature.name == 'Insights' ? true : false,
      deliveryRedeemCode:
        this.feature.name == 'Delivery Redeem Code' ? true : false,
      campaigns: this.feature.name == 'Campaigns' ? true : false,
    };
    this.userservice.updateMerchantProfile('', params).subscribe(
      (data) => {
        this.activeNextTab(this.activeId + 1);
        this.CommonService.toastNotification(
          'Success',
          'Profile Update SuccessFully',
          'Success'
        );
      },
      (err) => this.CommonService.toastNotification('Danger', err, 'danger')
    );
  }
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void { }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void { }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
    ];
  }

  onAddressSelect(searchAddress: any) {
    console.log({ "searchAddress": searchAddress });
    // alert(searchAddress)
  }
}
