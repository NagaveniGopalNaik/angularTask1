import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCharactorComponent } from './films-charactor.component';

describe('FilmsCharactorComponent', () => {
  let component: FilmsCharactorComponent;
  let fixture: ComponentFixture<FilmsCharactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsCharactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsCharactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
