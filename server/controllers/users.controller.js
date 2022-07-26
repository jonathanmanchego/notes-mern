import User from "../database/models/user.model.js";

export default class UserController {
  constructor(userRepositorio) {
    this.userRepositorio = userRepositorio;
  }

  async getUsers(req, res) {
    const users = await this.userRepositorio.getUsers();
    res.json(users.map(user => new User(user)));
  }

  async getUser(req, res) {
    const user = await this.userRepositorio.getUser(req.params.id);
    res.json(new User(user));
  }

  async createUser(req, res) {
    const new_user = new User(req.body);
    const user = await this.userRepositorio.createUser(new_user);
    new_user.id = user;
    res.json(new_user);
  }

  async updateUser(req, res) {
    const user_to_update = new User(await this.userRepositorio.getUser(req.params.id));
    const new_user = new User(req.body);
    new_user.created_at = user_to_update.created_at;
    const user_to_update_complete = new User({ ...user_to_update, ...new_user });
    await this.userRepositorio.updateUser(req.params.id, user_to_update_complete);
    res.json(user_to_update_complete);
  }

  async deleteUser(req, res) {
    const user = await this.userRepositorio.deleteUser(req.params.id);
    res.json(user);
  }
}