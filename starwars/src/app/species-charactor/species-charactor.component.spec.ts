import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesCharactorComponent } from './species-charactor.component';

describe('SpeciesCharactorComponent', () => {
  let component: SpeciesCharactorComponent;
  let fixture: ComponentFixture<SpeciesCharactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesCharactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeciesCharactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
