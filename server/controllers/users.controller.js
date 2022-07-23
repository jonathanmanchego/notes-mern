export default class UserController {
  constructor(userRepositorio) {
    this.userRepositorio = userRepositorio;
  }

  async getUsers(req, res) {
    const users = await this.userRepositorio.getUsers();
    res.json(users);
  }

  async getUser(req, res) {
    const user = await this.userRepositorio.getUser(req.params.id);
    res.json(user);
  }

  async createUser(req, res) {
    const user = await this.userRepositorio.createUser(req.body);
    res.json(user);
  }

  async updateUser(req, res) {
    const user = await this.userRepositorio.updateUser(req.params.id, req.body);
    res.json(user);
  }

  async deleteUser(req, res) {
    const user = await this.userRepositorio.deleteUser(req.params.id);
    res.json(user);
  }
}