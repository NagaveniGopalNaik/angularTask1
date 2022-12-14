import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAlertComponent } from './remove-alert.component';

describe('RemoveAlertComponent', () => {
  let component: RemoveAlertComponent;
  let fixture: ComponentFixture<RemoveAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
