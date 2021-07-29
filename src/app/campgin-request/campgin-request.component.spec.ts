import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampginRequestComponent } from './campgin-request.component';

describe('CampginRequestComponent', () => {
  let component: CampginRequestComponent;
  let fixture: ComponentFixture<CampginRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampginRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampginRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
