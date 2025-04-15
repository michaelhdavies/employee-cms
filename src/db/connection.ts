// Handles basic connection to DB
//connection.ts
import dotenv from 'dotenv';
import pg from 'pg';
const { Pool } = pg;

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: process.env.DB_NAME,
    port: 5432,
});

const connectToDb = async () => {
    try {
        const result = await pool.connect();
        console.log(`Database connection established`);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Database connection failed:', err.message);
        } else {
            console.error('Database connection failed:', err)
        }
        process.exit(1);
    }
};

export { pool, connectToDb };