--  Sets up the employees Database
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;
-- This is the database that contains three tables, "department" 
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    -- This will hold the role title.
    title VARCHAR(30) NOT NULL,
    -- This will hold the role salary.
    salary DECIMAL NOT NULL,
    -- This will hold the reference to the department.
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    -- This will hold the employee's first name.
    first_name VARCHAR(30) NOT NULL,
    -- This will hold the employee's last name.
    last_name VARCHAR(30) NOT NULL,
    -- This will hold the reference to role that the employee has.
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id),
    -- This wil lhold the reference to the manager of another employee.
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES role(id),
    PRIMARY KEY (id)
);