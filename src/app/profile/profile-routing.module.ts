import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingsComponent } from './profile-page/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ProfilePageComponent},
      {path: 'achievements', component: AchievementsComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
