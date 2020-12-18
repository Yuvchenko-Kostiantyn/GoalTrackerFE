import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GoalTracker';

  isLoggedIn: boolean;
  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.isUserLoggedIn
      .subscribe(data => this.isLoggedIn = data)

      console.log(this.isLoggedIn)
  }
}
