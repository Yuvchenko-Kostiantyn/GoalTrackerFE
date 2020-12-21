import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  urlId;
  isOwner = false;

  user: object;
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
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
    .subscribe( id => this.urlId = id);
    if (this.urlId === localStorage.getItem('userId')) {
      this.isOwner = true;
    }
    this.userService.getUser(this.urlId)
      .subscribe(user => {
        this.user = user;
      });
  }
  onSubmit(): void {
    this.router.navigate([`/profile/${this.urlId}/settings`]);
  }
  onClick(): void {
    this.router.navigate([`/profile/${this.urlId}/achievements`]);
  }
}
