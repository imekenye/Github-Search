export class Users {
  constructor(
    public avatar_url: string,
    public name: string,
    public followers: string,
    public following: string,
    public public_repos: number,
    public bio: string,
    public created_at: Date
  ) {}
}
