import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  urlId;
  isOwner = false;
  
  user: Object;
  avatar = '../../../assets/images/empty-avatar.png';

  badges = [
    {
      img: '../../../assets/images/budg.webp',
      points: 500
    },
    {
      img: '../../../assets/images/budg.webp',
      points: 600
    },
    {
      img: '../../../assets/images/budg.webp',
      points: 200
    },
    {
      img: '../../../assets/images/budg.webp',
      points: 3000
    },
    {
      img: '../../../assets/images/budg.webp',
      points: 3500
    },
    {
      img: '../../../assets/images/budg.webp',
      points: 5500
    },
  ];

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
    .subscribe( id => this.urlId = id);
    if(this.urlId == localStorage.getItem('userId')) {
      this.isOwner = true;
    }
    let token = localStorage.getItem('token');
    let headers = {
      headers: new HttpHeaders({ 'Authorization': token || '' })
    };
    this.authService.getUser(this.urlId, headers)
      .subscribe(user => {
        this.user = user;
      },
      error => {
        console.log(error.message);
        this.router.navigate(['**']);
      });
  }
  onSubmit() {
    localStorage.setItem('user', JSON.stringify(this.user))
    this.router.navigate(['/profile/19/settings']);
  }

}
