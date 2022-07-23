import { Router } from 'express';
import notesRoutes from './notes.routes.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.use('/notes', notesRoutes);

export default router;