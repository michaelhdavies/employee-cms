// Handles all queries - bring in the pool 

import { pool } from './connection.js';

// Establish db connection, query, and release
export const query = async (sql: string, args: any[]=[]) => {
    const client = await pool.connect();

    try {
        const result = await client.query(sql, args);
        // console.log('Query succesful');
        // console.table(result.rows);
        return result;
    } finally {
        client.release();
        // console.log('Client released');
    };
};

export async function viewDepts() {
    const output = await query('SELECT * FROM department');
    console.table(output.rows);
    return output;
};

export async function viewRoles() {
    const output = await query('SELECT * FROM role');
    console.table(output.rows);
    return output;
};

export async function viewEmployees() {
    const output = await query('SELECT * FROM employee');
    console.table(output.rows);
    return output;
};

export async function addDept(dept: string) {
    await query('INSERT INTO department (name) VALUES ($1)', [dept]);
    console.log(`Added ${dept} to the database`);
    return;
};

export async function updateEmployeeRole(employeeId: number, roleId: number) {
    await query('UPDATE employee SET role_id = $1 WHERE id = $2', [roleId, employeeId]);
    console.log(`Updated employee ${employeeId} to role ${roleId}`);
    return;
};