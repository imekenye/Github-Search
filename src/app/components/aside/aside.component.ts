import { Component, OnInit } from "@angular/core";
import { Users } from "../../user";
import { Repos } from "../../repos";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-aside",
  templateUrl: "./aside.component.html",
  styleUrls: ["./aside.component.scss"]
})
export class AsideComponent implements OnInit {
  users: any = Users;
  repos: any = Repos;
  created_at: any;
  username: string;

  constructor(private dataService: DataService) {
    this.users = new Users("", "", "", "", 0, "", new Date());
    this.dataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });

    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {}
}
