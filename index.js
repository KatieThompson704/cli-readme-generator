const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "1. What is the Project Title?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "2.	What is the Project Description?",
    name: "projectdescription",
  },
  {
    type: "input",
    message: "3. What are the Usage Instructions for this project?",
    name: "instructions",
  },
  {
    type: "list",
    message: "4. What License is required for this project? ",
    choices: [
      "MIT",
      "GPLv2",
      "Apache",
      "GPLv3",
      "BSD 3-clause",
      "Unlicensed",
      "Other",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "5. What is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "6. What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "7. ",
    name: "installation",
  },
  {
    type: "input",
    message: "8. List any contributors to your project",
    name: "contributing",
  },
  {
    type: "input",
    message: "9.",
    name: "test",
  },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFileSync("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
