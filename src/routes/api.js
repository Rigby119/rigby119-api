import { Router } from 'express';

const router = Router();

router.get('/info', (req, res) => {
    res.json({
        name: 'Rigby119 API',
        version: '1.0.0',
        status: 'online'
    });
});

export default router;
