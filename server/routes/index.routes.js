import { Router } from 'express';
import notesRoutes from './notes.routes.js';
import usersRoutes from './users.routes.js';
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.use('/notes', notesRoutes);
router.use('/users', usersRoutes);

export default router;