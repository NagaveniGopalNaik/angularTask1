import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFavouriteComponent } from './remove-favourite.component';

describe('RemoveFavouriteComponent', () => {
  let component: RemoveFavouriteComponent;
  let fixture: ComponentFixture<RemoveFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
