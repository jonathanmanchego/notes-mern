import { Router } from "express";
import UserController from "../controllers/users.controller.js";
import UserRepositorio from "../database/users.repositorio.js";

const router = Router();

router.get('/', (req, res) => {
  const usersRepositorio = new UserRepositorio();
  const usersController = new UserController(usersRepositorio);
  usersController.getUsers(req, res);
});

router.post('/', (req, res) => {
  const usersRepositorio = new UserRepositorio();
  const usersController = new UserController(usersRepositorio);
  usersController.createUser(req, res);
}
);

router.put('/:id', (req, res) => {
  const usersRepositorio = new UserRepositorio();
  const usersController = new UserController(usersRepositorio);
  usersController.updateUser(req, res);
});

router.delete('/:id', (req, res) => {
  const usersRepositorio = new UserRepositorio();
  const usersController = new UserController(usersRepositorio);
  usersController.deleteUser(req, res);
});

export default router;