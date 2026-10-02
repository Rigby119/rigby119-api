import { randomInt } from 'node:crypto';
import { quotes } from '../data/quotes.js';

export const getRandomQuote = (req, res) => {
    const quote = quotes[randomInt(quotes.length)];
    res.json({ quote });
};