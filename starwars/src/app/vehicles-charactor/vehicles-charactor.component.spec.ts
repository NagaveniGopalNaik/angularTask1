import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesCharactorComponent } from './vehicles-charactor.component';

describe('VehiclesCharactorComponent', () => {
  let component: VehiclesCharactorComponent;
  let fixture: ComponentFixture<VehiclesCharactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesCharactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesCharactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
