import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PasswordValidator } from '../../shared/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registrationForm: FormGroup;
  private emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  get email(): AbstractControl{
    return this.registrationForm.get('email');
  }

  get password(): AbstractControl{
    return this.registrationForm.get('password');
  }

  get first_name(): AbstractControl{
    return this.registrationForm.get('first_name');
  }

  get last_name(): AbstractControl{
    return this.registrationForm.get('last_name');
  }

  get birthdate(): AbstractControl{
    return this.registrationForm.get('birthdate');
  }

  get gender(): AbstractControl{
    return this.registrationForm.get('gender');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm_password: [''],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
    }, {validator: PasswordValidator});
  }


  onSubmit(): void{
    this.authService.registerUser(this.registrationForm.value);
  }
}