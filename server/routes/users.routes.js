import { Router } from "express";
import UserController from "../controllers/users.controller";
import UserRepositorio from "../database/users.repositorio";

const router = Router();

router.get('/', (req, res) => {
  const usersRepositorio = new UserRepositorio();
  const usersController = new UserController(usersRepositorio);
  usersController.getUsers(req, res);
});