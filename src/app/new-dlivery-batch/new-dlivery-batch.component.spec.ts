import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDliveryBatchComponent } from './new-dlivery-batch.component';

describe('NewDliveryBatchComponent', () => {
  let component: NewDliveryBatchComponent;
  let fixture: ComponentFixture<NewDliveryBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDliveryBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDliveryBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
