import { Component, OnInit } from "@angular/core";

import { DataService } from "../../services/data.service";
import { Repos } from "../../repos";

@Component({
  selector: "app-repo-card-details",
  templateUrl: "./repo-card-details.component.html",
  styleUrls: ["./repo-card-details.component.scss"]
})
export class RepoCardDetailsComponent implements OnInit {
  repos: any = Repos;
  reponame: string;
  show: number;

  constructor(private dataService: DataService) {
    this.repos = new Repos("", "", new Date(), "");
    this.dataService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });

    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {}
}
