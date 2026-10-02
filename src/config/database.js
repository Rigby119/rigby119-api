import mariadb from 'mariadb';
import { env } from './env.js';

const pool = mariadb.createPool({
    host: env.db.host,
    port: env.db.port,
    database: env.db.name,
    user: env.db.user,
    password: env.db.password,

    connectionLimit: 5
});

export default pool;
