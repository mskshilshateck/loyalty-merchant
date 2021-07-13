import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompaignComponent } from './new-compaign.component';

describe('NewCompaignComponent', () => {
  let component: NewCompaignComponent;
  let fixture: ComponentFixture<NewCompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
