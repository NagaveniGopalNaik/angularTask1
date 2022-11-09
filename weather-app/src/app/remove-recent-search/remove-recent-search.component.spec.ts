import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRecentSearchComponent } from './remove-recent-search.component';

describe('RemoveRecentSearchComponent', () => {
  let component: RemoveRecentSearchComponent;
  let fixture: ComponentFixture<RemoveRecentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRecentSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveRecentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
