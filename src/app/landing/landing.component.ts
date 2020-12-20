import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(
      res => {
        if (res){
          this.router.navigate(['/dashboard']);
        }
      },
      error => console.error(error.message)
      );
  }
}
