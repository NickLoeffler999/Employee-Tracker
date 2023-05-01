USE employeeTracker_db;
INSERT INTO department (name)
VALUES ('Sales'),
    ('Support'),
    ('Marketing'),
    ('Legal');
INSERT INTO role (department_id, title, salary)
VALUES (1, 'Sales Lead', 90000),
    (1, 'Sales Associate', 80000),
    (2, 'Lead Engineer', 150000),
    (2, 'Support Associate', 40000),
    (3, 'Marketing Manager', 80000),
    (3, 'Marketing Associate', 60000),
    (4, 'Legal Team Lead', 200000),
    (4, 'Lawyer', 190000);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 2),
    ('Mike', 'Winters', 2, 1),
    ('Lisa', 'Ashcroft', 3, 4),
    ('Steve', 'Minske', 4, 3),
    ('Kane', 'Kopen', 5, 4),
    ('Heather', 'Williams', 6, 1),
    ('Julie', 'Fanning', 7, 3),
    ('Dane', 'Smith', 8, 2);