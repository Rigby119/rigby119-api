export const getInfo = (req, res) => {
    res.json({
        name: 'Rigby119 API',
        version: '1.0.0',
        status: 'online'
    });
};