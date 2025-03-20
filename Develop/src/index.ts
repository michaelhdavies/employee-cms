// Handles logo and prompting through inquirer

import inquirer from 'inquirer';
import { viewDepts, viewRoles, viewEmployees, addDept, addRole, addEmp, updateEmpRole } from './db/index.js';

const init = () => {
    // create variable that holds the logo and then renders it
    // console log will be sufficient because this exists in cl
    // load the main prompts
};

function mainPrompts() {
    inquirer.prompt([{
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [{ name:'View All Departments', value:'view_depts' }, 
            { name:'View All Roles', value:'view_roles' }, 
            { name:'View All Employees', value:'view_emp' },
            { name:'Add a Department', value:'add_dept' },
            { name:'Add a Role', value:'add_role' },
            { name:'Add an Employee', value:'add_emp' },
            { name:'Update an Employee Role', value: 'update_emp' },
            { name:'Exit', value: 'ext' }
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
            case 'view_emp':
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
            case 'add_role':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'title',
                        message: 'What is the tile of the new role?',
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'What is the salary?',
                    },
                    {
                        type: 'input',
                        name: 'dept_id',
                        message: 'What is the department id?',
                    }
            ]).then((res) => {
                    addRole( res.title, res.salary, res.dept_id )});
                    console.log('Role add successful');
                break;
            case 'add_emp':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'first_name',
                        message: 'What is the first name?',
                    },
                    {
                        type: 'input',
                        name: 'last_name',
                        message: 'What is the last name?',
                    },
                    {
                        type: 'input',
                        name: 'role_id',
                        message: 'What is the role id?',
                    },
                    {
                        type: 'input',
                        name: 'manager_id',
                        message: 'What is the manager id?',
                    }
            ]).then((res) => {
                    addEmp( res.first_name, res.last_name, res.role_id, res.manager_id )});
                    console.log('Role add successful');
                break;

            case 'update_emp':
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
                    updateEmpRole(res.employee_id, res.role_id);
                    console.log('Employee role updated');
                });
                break;
            case 'ext':
                process.exit();
        };
    })
    // Call again so questions are asked after answer is given
};

export function exitSystem() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'again',
        message: 'Would you like to do another action?',
    }]).then((res) => {
        if (res.again) {
            mainPrompts();
        } else {
            console.log('Goodbye!');
        };
    });
}

mainPrompts();