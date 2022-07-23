import { Router } from "express";
import NotesController from "../controllers/notes.controller.js";
import NoteRepositorio from "../database/notes.repositorio.js";

const router = Router();

router.get("/", (req, res) => {
  const notesRepositorio = new NoteRepositorio();
  const notesController = new NotesController(notesRepositorio);
  notesController.getNotes(req, res); 
});
export default router;