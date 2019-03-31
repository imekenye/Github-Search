import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AsideComponent } from "./components/aside/aside.component";
import { HeaderComponent } from "./components/header/header.component";
import { RepoCardComponent } from "./components/repo-card/repo-card.component";
import { RepoCardDetailsComponent } from "./components/repo-card-details/repo-card-details.component";
import { MainAreaComponent } from "./components/main-area/main-area.component";
import { DataService } from "./services/data.service";
import { DateConvertPipe } from './date-convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    RepoCardComponent,
    RepoCardDetailsComponent,
    MainAreaComponent,
    DateConvertPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
