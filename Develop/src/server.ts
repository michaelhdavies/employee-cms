// server.ts
import express, { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/employees', async (req: Request, res: Response) => {
    try {
        const result: QueryResult = await pool.query('SELECT * FROM employee');
        res.json(result.rows);
    } catch (err) {
        console.error(`An error occurred on query: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

(async () => {
    try {
        await connectToDb();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Server failed to run:', err);
        process.exit(1);
    }
})();