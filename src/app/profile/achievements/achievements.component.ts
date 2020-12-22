import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BadgeService } from 'src/app/shared/services/badge.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  urlId;
  badges;

  constructor(
    private route: ActivatedRoute,
    private  badgeService: BadgeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe( id => this.urlId = id);
    this.badgeService.getBadgesByUserId(this.urlId)
      .subscribe(badges => {
        this.badges = badges;
      });
  }

}
