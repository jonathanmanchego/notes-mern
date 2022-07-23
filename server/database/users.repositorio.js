export default class UserRepositorio {
  async getUsers() {
    const [rows] = await pool.execute("SELECT * FROM users");
    return rows;
  }

  async getUser(id) {
    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  }

  async createUser(user) {
    const [rows] = await pool.execute(
      "INSERT INTO users (name, username, password, created_at, updated_at) VALUES (?, ?, ?)",
      [user.name, user.username, user.password, user.created_at, user.updated_at]
    );
    return rows.insertId;
  }

  async updateUser(id, user) {
    const [rows] = await pool.execute(
      "UPDATE users SET name = ?, username = ?, updated_at = ? WHERE id = ?",
      [user.name, user.username, user.password, user.updated_at, id]
    );
    return rows.affectedRows;
  }

  async deleteUser(id) {
    const [rows] = await pool.execute("DELETE FROM users WHERE id = ?", [id]);
    return rows.affectedRows;
  }
}