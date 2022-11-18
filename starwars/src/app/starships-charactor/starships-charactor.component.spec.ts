import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsCharactorComponent } from './starships-charactor.component';

describe('StarshipsCharactorComponent', () => {
  let component: StarshipsCharactorComponent;
  let fixture: ComponentFixture<StarshipsCharactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsCharactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsCharactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
