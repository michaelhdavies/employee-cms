-- Seed data for department table --
INSERT INTO department (name)
                VALUES ('Admin'),
                       ('Software'),
                       ('Facilities');
-- Seed data for role table --
INSERT INTO role (title, salary, department_id)
        VALUES ('Top Dog', 10000000, 1),
               ('Senior Dev', 1000000, 2),
               ('Junior Dev', 100000, 2);

-- Seed data for employee table --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES ('Top', 'Dog', 1, 1),
                     ('Michael', 'Davies', 2, 1),
                     ('Joshua', 'Davies', 3, 2);