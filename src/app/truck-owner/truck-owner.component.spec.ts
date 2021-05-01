import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckOwnerComponent } from './truck-owner.component';

describe('TruckOwnerComponent', () => {
  let component: TruckOwnerComponent;
  let fixture: ComponentFixture<TruckOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
