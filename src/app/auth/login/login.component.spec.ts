import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should become valid when filled with valid credentials', () => {
    expect(component.loginForm.valid).toBeFalsy();

    const email = component.loginForm.controls['email'];
    const password = component.loginForm.controls['password'];

    email.setValue('validEmail@email.com');
    password.setValue('123456');

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('form should only accept valid email', () => {
    const emailField = component.loginForm.controls['email'];
    emailField.setValue('invalidEmail@email');
    expect(emailField.valid).toBeFalsy();

    emailField.setValue('validEmail@email.com');
    expect(emailField.valid).toBeTruthy();
  });

  it('form should only accept password longer than 5 characters', () => {
    const password = component.loginForm.controls['password'];
    password.setValue('1234');
    expect(password.valid).toBeFalsy();

    password.setValue('12345');
    expect(password.valid).toBeTruthy();
  })
});
