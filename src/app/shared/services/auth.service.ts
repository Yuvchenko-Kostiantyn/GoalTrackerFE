import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Service for future registration and authorization API interaction
  constructor() { }

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
      // this.router.navigate(['/'])
    }
}
