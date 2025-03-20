// Handles all queries - bring in the pool 

import { pool } from './connection.js';
import { exitSystem } from '../index.js';

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
    const output = await query('SELECT * FROM departments;');
    console.table(output.rows);
    return exitSystem();
};

export async function viewRoles() {
    const output = await query('SELECT * FROM roles;');
    console.table(output.rows);
    return exitSystem();
};

export async function viewEmployees() {
    const output = await query('SELECT * FROM employees;');
    console.table(output.rows);
    return exitSystem();
};

export async function addDept(dept: string) {
    await query('INSERT INTO departments (name) VALUES ($1);', [dept]);
    console.log(`Added ${dept} to the database`);
    return exitSystem();
};

export async function addRole(title: string, salary: number, dept_id: number) {
    await query('INSERT INTO roles (title, salary, dept_id) VALUES ($1, $2, $3);', [title, salary, dept_id]);
    console.log(`Added ${title} to the database with salary ${salary} and department id ${dept_id}`);
    return exitSystem();
};

export async function addEmp(first_name: string, last_name: string, role_id: number, manager_id: number) {
    await query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);', [first_name, last_name, role_id, manager_id]);
    console.log(`Added ${first_name} ${last_name} to the database with role id ${role_id} and manager id ${manager_id}`);
    return exitSystem();
};

export async function updateEmpRole(employeeId: number, roleId: number) {
    await query('UPDATE employees SET role_id = $1 WHERE id = $2', [roleId, employeeId]);
    console.log(`Updated employee ${employeeId} to role ${roleId}`);
    return exitSystem();
};

