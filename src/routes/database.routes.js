import { Router } from 'express';
import { testDatabase } from '../controllers/database.controller.js';

const router = Router();

router.get('/test', testDatabase);

export default router;
