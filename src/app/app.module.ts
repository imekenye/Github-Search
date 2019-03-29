import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { RepoCardDetailsComponent } from './repo-card-details/repo-card-details.component';
import { MainAreaComponent } from './main-area/main-area.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    RepoCardComponent,
    RepoCardDetailsComponent,
    MainAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
