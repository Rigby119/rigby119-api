import pool from '../config/database.js';

export const testDatabase = async (req, res, next) => {
    let connection;

    try {
        connection = await pool.getConnection();

        const result = await connection.query(
            'SELECT DATABASE() AS database'
        );

        res.json({
            database: result[0].database,
            status: 'connected'
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};
