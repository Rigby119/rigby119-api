import { Router } from 'express';
// Rutas
import infoRoutes from './info.routes.js';
import systemRoutes from './system.routes.js';
import helloRoutes from './hello.routes.js';
import quoteRoutes from './quote.routes.js';
import generatorsRoutes from './generators.routes.js';

const router = Router();

router.use('/info', infoRoutes);
router.use('/hello', helloRoutes);
router.use('/quote', quoteRoutes);

// Estos dos definen sus propios paths completos (/status, /uuid, /dice/:sides...)
router.use('/', systemRoutes);
router.use('/', generatorsRoutes);

export default router;
