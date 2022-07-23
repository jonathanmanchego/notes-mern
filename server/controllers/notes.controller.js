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
    const note = await this.notesService.createNote(req.body);
    res.json(note);
  }

  async updateNote(req, res) {
    const note = await this.notesService.updateNote(req.params.id, req.body);
    res.json(note);
  }

  async deleteNote(req, res) {
    const note = await this.notesService.deleteNote(req.params.id);
    res.json(note);
  }
}