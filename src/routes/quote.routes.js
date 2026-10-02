import { Router } from 'express';
import { getRandomQuote } from '../controllers/quote.controller.js';

const router = Router();

router.get('/', getRandomQuote);

export default router;