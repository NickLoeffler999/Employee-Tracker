// Required dependencies
const router = require("express").Router();

const mysql = require("mysql2");

const inquirer = require("inquirer");

// This const will represent/call the database "employees_db" so it is usable further in this file.
const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employees_db",
});

// This function will call the beginning prompts of the application.
const createPrompts = () => {
  inquirer.prompt({
    name: "choices",
    type: "list",
    message: "Please select a menu option!",
    choices: [
      "View All Employees",
      "View All Roles",
      "View All Departments",
      "View Employees By Manager",
      "Update Employee Role",
      "Add New Employee",
      "Add New Role",
      "Add New Department",
      "Exit Menu",
    ],
  });
};

// This is the function that will initialize the application
function init() {
  console.log(`
      =========================================
      EMPLOYEE TRACKER
      =========================================
      `);

  inquirer.prompt(createPrompts).then((data) => {});
}
// This function call will initialize the application.
init();

// Views all employees
const viewEmployees = () => {
  const query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  createPrompts();
};

// Views all roles
const viewRoles = () => {
  const query = "SELECT * FROM role";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  createPrompts();
};

// Views all departments
const viewDepartments = () => {
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  createPrompts();
};

// This function uses ORDER BY to view employees by their manager.
const viewEmployeesByManager = () => {
  const query = "SELECT * FROM employee ORDER BY manager_id DESC";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
  });

  createPrompts();
};
