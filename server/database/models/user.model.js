export default class User {
  constructor({id, name, username, password, created_at, updated_at}) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    const date = new Date();
    this.created_at = created_at || date;
    this.updated_at = updated_at || date;
  }
}