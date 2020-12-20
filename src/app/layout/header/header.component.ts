import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isNavbarShown = false;
  public userId: string;
  constructor(private authServiсe: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userId = `/profile/${localStorage.getItem('userId')}`;
  }

  onLogout(): void{
    // this.authServiсe.logout({}).subscribe(() => {});
      this.authServiсe.isUserLoggedIn.next(false);
      localStorage.clear();
      this.router.navigate(['/']);
  }

  toggleNav(): void {
    this.isNavbarShown = !this.isNavbarShown;
  }
}
