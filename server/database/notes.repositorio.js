import { pool } from "./index.database.js";

export default class NoteRepositorio {
  async getNotes() {
    const [rows] = await pool.execute("SELECT * FROM notes");
    return rows;
  }

  async getNote(id) {
    const [rows] = await pool.execute("SELECT * FROM notes WHERE id = ?", [id]);
    return rows[0];
  }

  async createNote(note) {
    const [rows] = await pool.execute(
      "INSERT INTO notes (title, body, status,users_id, created_at, updated_at) VALUES (?, ?, ?, ?,?,?)",
      [note.title, note.body, note.status || 1, note.users_id, note.created_at, note.updated_at]
    );
    return rows.insertId;
  }

  async updateNote(id, note) {
    const [rows] = await pool.execute(
      "UPDATE notes SET title = ?, body = ?, status = ?, updated_at  WHERE id = ?",
      [note.title, note.body, note.status || 1,note.updated_at, id]
    );
    return rows.affectedRows;
  }

  async deleteNote(id) {
    const [rows] = await pool.execute("DELETE FROM notes WHERE id = ?", [id]);
    return rows.affectedRows;
  }
}