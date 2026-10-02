import express from 'express';
import apiRouter from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Rigby119 API',
        status: 'online'
    });
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
