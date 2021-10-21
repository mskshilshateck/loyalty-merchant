import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRequestComponent } from './brand-request.component';

describe('BrandRequestComponent', () => {
  let component: BrandRequestComponent;
  let fixture: ComponentFixture<BrandRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
