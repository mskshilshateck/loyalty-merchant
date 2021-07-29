import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchRequestComponent } from './batch-request.component';

describe('BatchRequestComponent', () => {
  let component: BatchRequestComponent;
  let fixture: ComponentFixture<BatchRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
