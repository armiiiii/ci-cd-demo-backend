import {Pool} from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    database: process.env.DB_NAME
})

export default pool;
