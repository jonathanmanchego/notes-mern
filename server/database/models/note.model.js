export default class Note {
  constructor({id, title, body, status, created_at, updated_at, users_id}) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.status = status;
    const date = new Date();
    this.created_at = created_at || date;
    this.updated_at = updated_at || date;
  }
}