import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsCharactorComponent } from './planets-charactor.component';

describe('PlanetsCharactorComponent', () => {
  let component: PlanetsCharactorComponent;
  let fixture: ComponentFixture<PlanetsCharactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsCharactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetsCharactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
