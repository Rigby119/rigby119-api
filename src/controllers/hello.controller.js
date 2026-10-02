import { httpError } from '../utils/httpError.js';

export const sayHello = (req, res) => {
    const { name } = req.params;

    if (name.length > 50) {
        throw httpError(400, 'Name must be 50 characters or fewer');
    }

    res.json({ message: `Hello, ${name}!` });
};