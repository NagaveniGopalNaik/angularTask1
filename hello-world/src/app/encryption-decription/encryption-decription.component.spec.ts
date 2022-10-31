import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionDecriptionComponent } from './encryption-decription.component';

describe('EncryptionDecriptionComponent', () => {
  let component: EncryptionDecriptionComponent;
  let fixture: ComponentFixture<EncryptionDecriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptionDecriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncryptionDecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
