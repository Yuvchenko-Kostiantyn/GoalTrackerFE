import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  public loginForm: FormGroup;
  private emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  get email(): AbstractControl {
    return this.loginForm.get('email');
  }
  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    this.loading = true;
    const body = {
      email: this.email.value,
      password: this.password.value,
    };

    this.authService.loginUser(body).subscribe(
        response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.id);
        this.router.navigate(['/dashboard']);
        this.loading = false;
      },
        error => {
        console.error(error);
        this.loading = false;
      }
      );
  }
}
