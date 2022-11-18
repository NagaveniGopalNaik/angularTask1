import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SptarshipsDetailsComponent } from './sptarships-details.component';

describe('SptarshipsDetailsComponent', () => {
  let component: SptarshipsDetailsComponent;
  let fixture: ComponentFixture<SptarshipsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SptarshipsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SptarshipsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
