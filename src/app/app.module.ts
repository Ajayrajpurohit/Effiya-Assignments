import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { RmComponent } from './rm/rm.component';
import { ImpactComponent } from './impact/impact.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'shortlist', component: ShortlistComponent },
  { path: 'rm', component:  RmComponent },
  { path: 'impact', component: ImpactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShortlistComponent,
    RmComponent,
    ImpactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
