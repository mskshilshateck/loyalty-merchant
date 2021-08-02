import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandOutletsComponent } from './brand-outlets.component';

describe('BrandOutletsComponent', () => {
  let component: BrandOutletsComponent;
  let fixture: ComponentFixture<BrandOutletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandOutletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
