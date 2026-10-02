import { Router } from 'express';
// Rutas
import infoRoutes from './info.routes.js';

const router = Router();

router.use('/info', infoRoutes);

export default router;
