import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompaignComponent } from './single-compaign.component';

describe('SingleCompaignComponent', () => {
  let component: SingleCompaignComponent;
  let fixture: ComponentFixture<SingleCompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCompaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
