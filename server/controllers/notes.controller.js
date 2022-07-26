import Note from "../database/models/note.model.js";

export default class NotesController {
  constructor(notesService) {
    this.notesService = notesService;
  }

  async getNotes(req, res) {
    const notes = await this.notesService.getNotes();
    res.json(notes);
  }

  async getNote(req, res) {
    const note = await this.notesService.getNote(req.params.id);
    res.json(note);
  }

  async createNote(req, res) {
    const note_to_create = new Note(req.body);
    const note = await this.notesService.createNote(note_to_create);
    note_to_create.id = note;
    res.json(note_to_create);
  }

  async updateNote(req, res) {
    const note_to_update = new Note(await this.notesService.getNote(req.params.id));
    const new_note = new Note(req.body);
    new_note.created_at = note_to_update.created_at;
    const note_to_update_complete = new Note({ ...note_to_update, ...new_note });
    await this.notesService.updateNote(req.params.id, note_to_update_complete);
    res.json(note_to_update_complete);
  }

  async deleteNote(req, res) {
    const note = await this.notesService.deleteNote(req.params.id);
    res.json(note);
  }
}