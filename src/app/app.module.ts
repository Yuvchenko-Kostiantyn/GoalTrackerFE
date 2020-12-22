import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { GoalsComponent } from './dashboard/goals/goals.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingComponent,
    DashboardComponent,
    StatisticsComponent,
    GoalsComponent,
    // BadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
