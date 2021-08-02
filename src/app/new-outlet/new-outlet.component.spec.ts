import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOutletComponent } from './new-outlet.component';

describe('NewOutletComponent', () => {
  let component: NewOutletComponent;
  let fixture: ComponentFixture<NewOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
