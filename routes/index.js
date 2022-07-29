import taskRoutes from './taskRoutes.js';
import userRoutes from './userRoutes.js';
import { Router } from 'express';

const router = Router();

router.use('/api', taskRoutes);
router.use('/api', userRoutes);

export default router;
