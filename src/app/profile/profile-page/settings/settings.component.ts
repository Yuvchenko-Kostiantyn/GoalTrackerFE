import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/iuser';
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

  user: IUser;

  get first_name(): AbstractControl{
    return this.updateForm.get('first_name');
  }

  get last_name(): AbstractControl{
    return this.updateForm.get('last_name');
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
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('userId'))
      .subscribe((user) => {
        this.user = user;
        this.first_name.setValue(this.user.firstName);
        this.last_name.setValue(this.user.secondName);
        this.gender.setValue(this.user.gender);
        this.birthdate.setValue(this.user.birthdate.toString().split('T')[0]);
      });
    this.updateForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.minLength(5)]],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }


  onSubmit(): void {
    const updateUserBody = {
      firstName: this.first_name.value,
      secondName: this.last_name.value,
      password: this.password.value,
      email: this.user.email,
      gender: this.gender.value,
      birthdate:  new Date(this.birthdate.value),
      location: this.user.location,
      scores: this.user.scores
    };
    const userId = localStorage.getItem('userId');
    this.userService.updateUser(updateUserBody, userId)
      .subscribe(() => {
        this.router.navigate([`/profile/${userId}`]);
      });
  }
}
