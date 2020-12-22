import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BadgeService } from 'src/app/shared/services/badge.service';
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
  badges;

  avatar = '../../../assets/images/empty-avatar.png';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private badgeService: BadgeService,
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
    this.badgeService.getBadgesByUserId(this.urlId)
      .subscribe(badges => {
        this.badges = badges.sort((a, b) => a.scores > b.scores ? -1 : 1);
      });
  }
  onSubmit(): void {
    this.router.navigate([`/profile/${this.urlId}/settings`]);
  }
  onClick(): void {
    this.router.navigate([`/profile/${this.urlId}/achievements`]);
  }
}
