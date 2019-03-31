import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private username: string;
  private reponame: string;
  private show: number;

  constructor(private http: HttpClient) {
    console.log("We ready");
    this.username = "imekenye";
    this.reponame = "";
    this.show = 10;
  }

  getUsers() {
    return this.http
      .get(
        environment.apiUrl +
          "users/" +
          this.username +
          "?access_token=" +
          environment.accessToken
      )
      .pipe(map(result => result));
  }

  getRepos() {
    return this.http
      .get(
        environment.apiUrl +
          "users/" +
          this.username +
          "/repos?order=created&sort=asc?access_token=" +
          environment.accessToken
      )
      .pipe(map(result => result));
  }

  getRepoInfo() {
    return this.http
      .get(
        environment.apiUrl +
          "search/repositories?q={" +
          this.reponame +
          "}&per_page=" +
          this.show +
          "&sort=forks&order=asc?" +
          environment.accessToken
      )
      .pipe(map(result => result));
  }

  updateUsers(username: string) {
    this.username = username;
  }

  updateRepos(reponame: string) {
    this.reponame = reponame;
  }

  updateShow(show: number) {
    this.show = this.show + 10;
  }
}
