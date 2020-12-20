import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  public updateForm: FormGroup;
  private emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  user;

  get first_name(): AbstractControl{
    return this.updateForm.get('first_name');
  }

  get last_name(): AbstractControl{
    return this.updateForm.get('last_name');
  }

  get email(): AbstractControl{
    return this.updateForm.get('email');
  }

  get password(): AbstractControl{
    return this.updateForm.get('password');
  }

  get gender(): AbstractControl{
    return this.updateForm.get('gender');
  }

  get birthdate(): AbstractControl{
    return this.updateForm.get('birthdate');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.updateForm = this.fb.group({
      first_name: [this.user.firstName, [Validators.required, Validators.minLength(3)]],
      last_name: [this.user.secondName, [Validators.required, Validators.minLength(3)]],
      email: [this.user.email, [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      gender: [this.user.gender, Validators.required],
      birthdate: [this.user.birthdate, Validators.required],
    });
  }


  onSubmit(): void {
    const body = {
      firstName: this.first_name.value,
      secondName: this.last_name.value,
      email: this.email.value,
      password: this.password.value,
      gender: this.gender.value,
      birthdate: new Date(this.birthdate.value)
    };
    const token = localStorage.getItem('token');
    const headers = {
      headers: new HttpHeaders({ Authorization: token || '' })
    };
    const userId = localStorage.getItem('userId');
    this.userService.updateUser(body, headers, userId)
      .subscribe(() => {
        this.authService.loginUser(body)
          .subscribe((response) => {
            localStorage.setItem('token', response.token );
            localStorage.setItem('userId', response.id);
            localStorage.removeItem('user');
            this.router.navigate([`/profile/${userId}`]);
          });
      });
  }
}
