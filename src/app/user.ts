export class Users {
  constructor(
    public avatar_url: string,
    public name: string,
    public followers: string,
    public following: string,
    public public_repos: number,
    public bio: string,
    public created_at: Date
  ) {
    this.name = name;

    this.avatar_url = avatar_url;
    this.name = name;
    this.followers = followers;
    this.following = following;
    this.public_repos = public_repos;
    this.bio = bio;
    this.created_at = created_at;
  }
}
