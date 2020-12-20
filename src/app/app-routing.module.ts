import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: LandingComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'goals', canActivate: [AuthGuard],
    loadChildren: () => import('./goals/goals.module').then(m => m.GoalsModule)
  },
  {
    path: 'profile/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
