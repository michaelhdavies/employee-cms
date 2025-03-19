// Handles logo and prompting through inquirer

import inquirer from 'inquirer';
import { viewDepts, viewRoles, viewEmployees, addDept, updateEmployeeRole } from './db/index.js';

function init() {
    // create variable that holds the logo and then renders it
    // console log will be sufficient because this exists in cl
    // load the main prompts
    mainPrompts();
}

function mainPrompts() {
    inquirer.prompt([{
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [{ name:'View All Departments', value: 'view_depts' }, 
            { name:'View All Roles', value: 'view_roles' }, 
            { name:'View All Employees', value: 'view_employees' },
            { name:'Add a Department', value: 'add_dept' },
            // 'Add a Role', 'Add an Employee', 
            { name:'Update an Employee Role', value: 'update_employee' }
            // 'Exit'
        ]
    }]).then((res) => {
        const choice = res.choice;
        switch(choice) {
            case 'view_depts':
                viewDepts();
                break;
            case 'view_roles':
                viewRoles();
                break;
            case 'view_employees':
                viewEmployees();
                break;
            case 'add_dept':
                inquirer.prompt([{
                    type: 'input',
                    name: 'dept',
                    message: 'What is the name of the department you would like to add?',
                }]).then((res) => {
                    addDept(res.dept)});
                    console.log('Department add successful');
                break;
            case 'update_employee':
                // Display list of employees with corresponding ID's;
                
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'employee_id',
                        message: 'What is the id of the employee?',
                    },
                    {
                        type: 'input',
                        name: 'role_id',
                        message: 'What is the id of the role?',
                    }
                ]).then((res) => {
                    updateEmployeeRole(res.employee_id, res.role_id);
                    console.log('Employee role updated');
                });
                break;
        }
    });
    // Call again so questions are asked after answer is given
}

init();
// inquirer functions down here
// use queries with dot notation db.viewDepartments();
