import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Users } from "../../user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  users: any = Users;
  username: string;
  repos: any = [];

  constructor(private dataService: DataService) {}
  searchUser() {
    this.dataService.updateUsers(this.username);
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
