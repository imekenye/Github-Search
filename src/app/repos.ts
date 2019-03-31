export class Repos {
  constructor(
    public name: string,
    public description: string,
    public created_at: Date,
    public html_url: string
  ) {
    this.name = name;
    this.description = description;
    this.created_at = created_at;
    this.html_url = html_url;
  }
}
