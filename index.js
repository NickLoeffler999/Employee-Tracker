// This connects to the db to perform quieries.
const mysql = require("mysql2");
// This will require the "Inquirer" package for use in the application.
const inquirer = require("inquirer");
// dotenv for environmental variables
require("dotenv").config();

// This const will represent the database "employees_db"
const db = mysql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employees_db",
});

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
