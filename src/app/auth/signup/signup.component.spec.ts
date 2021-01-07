import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('form email field should accept valid email', () => {
    let emailField = component.registrationForm.controls['email'];

    emailField.setValue('invalidEmail@email');
    expect(emailField.valid).toBeFalsy();

    emailField.setValue('validEmail@email.com');
    expect(emailField.valid).toBeTruthy()
  });

  it('form should not accept invalid email', () => {
    let emailField = component.registrationForm.controls['email'];

    emailField.setValue('validEmail@email');
    expect(emailField.valid).toBeFalsy();
  })
});
