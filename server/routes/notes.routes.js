import { Router } from "express";
import NotesController from "../controllers/notes.controller.js";
import NoteRepositorio from "../database/notes.repositorio.js";

const router = Router();

router.get("/", (req, res) => {
  const notesRepositorio = new NoteRepositorio();
  const notesController = new NotesController(notesRepositorio);
  notesController.getNotes(req, res); 
});
router.post("/", (req, res) => {
  const notesRepositorio = new NoteRepositorio();
  const notesController = new NotesController(notesRepositorio);
  notesController.createNote(req, res);
});
router.put("/:id", (req, res) => {
  const notesRepositorio = new NoteRepositorio();
  const notesController = new NotesController(notesRepositorio);
  notesController.updateNote(req, res);
}
);
router.delete("/:id", (req, res) => {
  const notesRepositorio = new NoteRepositorio();
  const notesController = new NotesController(notesRepositorio);
  notesController.deleteNote(req, res);
});
export default router;