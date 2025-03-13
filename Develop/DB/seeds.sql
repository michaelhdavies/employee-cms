-- Seed data for department table --
INSERT INTO department (name)
                VALUES ('Admin');
INSERT INTO department (name)
                VALUES ('Software');
-- Seed data for role table --
INSERT INTO role (title, salary, department_id)
        VALUES ('Top Dog', 10000000, 1);
INSERT INTO role (title, salary, department_id)
        VALUES ('Senior Dev', 1000000, 2);
INSERT INTO role (title, salary, department_id)
        VALUES ('Junior Dev', 100000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES ('Top', 'Dog', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES ('Michael', 'Davies', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES ('Joshua', 'Davies', 3, 2);