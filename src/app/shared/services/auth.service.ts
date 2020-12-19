import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Service for future registration and authorization API interaction
  constructor(private router: Router) { }

  public isUserLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

    registerUser(data): void{
      console.log(data);
    }

    loginUser(data): boolean {
      console.log(data);
      return true;
    }

    logout(){
      this.isUserLoggedIn.next(false);
      localStorage.clear();
      this.router.navigate(['/']);
    }
}
