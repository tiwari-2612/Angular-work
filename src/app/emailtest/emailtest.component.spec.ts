import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailtestComponent } from './emailtest.component';

describe('EmailtestComponent', () => {
  let component: EmailtestComponent;
  let fixture: ComponentFixture<EmailtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailtestComponent]
    });
    fixture = TestBed.createComponent(EmailtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
