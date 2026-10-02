import { Router } from 'express';
import {
    getRandomColor,
    getUuid,
    getPassword,
    rollDice
} from '../controllers/generators.controller.js';

const router = Router();

router.get('/color/random', getRandomColor);
router.get('/uuid', getUuid);
router.get('/password', getPassword);
router.get('/dice/:sides', rollDice);

export default router;