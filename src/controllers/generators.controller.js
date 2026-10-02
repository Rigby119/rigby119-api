import { randomInt, randomUUID } from 'node:crypto';
import { httpError } from '../utils/httpError.js';

const PASSWORD_CHARSET =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';

export const getRandomColor = (req, res) => {
    const value = randomInt(0, 0x1000000); // 0x000000 a 0xFFFFFF
    const hex = value.toString(16).padStart(6, '0').toUpperCase();
    res.json({ color: `#${hex}` });
};

export const getUuid = (req, res) => {
    res.json({ uuid: randomUUID() });
};

export const getPassword = (req, res) => {
    const length = req.query.length === undefined ? 16 : Number(req.query.length);

    if (!Number.isInteger(length) || length < 8 || length > 128) {
        throw httpError(400, 'length must be an integer between 8 and 128');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += PASSWORD_CHARSET[randomInt(PASSWORD_CHARSET.length)];
    }

    res.json({ password, length });
};

export const rollDice = (req, res) => {
    const { sides } = req.params;

    if (!/^\d+$/.test(sides)) {
        throw httpError(400, 'sides must be a positive integer');
    }

    const n = Number(sides);

    if (n < 2 || n > 1000) {
        throw httpError(400, 'sides must be between 2 and 1000');
    }

    res.json({ sides: n, result: randomInt(1, n + 1) });
};