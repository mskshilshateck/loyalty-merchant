import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchGeneratedComponent } from './batch-generated.component';

describe('BatchGeneratedComponent', () => {
  let component: BatchGeneratedComponent;
  let fixture: ComponentFixture<BatchGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchGeneratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
