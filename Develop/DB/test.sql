SELECT
    CONCAT(first_name, ' ', last_name) 
    AS employee FROM employee;

SELECT 
    e.id,
    CONCAT(e.first_name, ' ', e.last_name) AS full_name,
    r.title AS role_title,
    d.name AS department_name
FROM employee e
JOIN role r ON e.role_id = r.id
JOIN department d ON r.department_id = d.id;