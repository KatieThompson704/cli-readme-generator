// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the title of your application",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of your application",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter installation instructions for your application",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter usage information for your application",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter contribution guidelines for your application",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please enter test instructions for your application",
    name: "testinstruction",
  },
  {
    type: "list",
    message: "Please choose a license for your application",
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
];
inquirer.prompt(questions).then((answers) => {
  const FILENAME =
    answers.title.toLowerCase().split(" ").join("") + "_README.json";
  fs.writeFile(FILENAME, JSON.stringify(answers), (err) => {
    err ? console.error(err) : console.log("Successfully wrote to file");
  });

  // TODO: Create a function to write README file
  let generateREADME = `# ${answers.title}
${answers.description}
## Table of Contents
<ul>
<li><a href="#install">Installation Instructions</a></li>
<li><a href="#usage">Usage Information</a></li>
<li><a href="#contribution">Contribution Guidelines</a></li>
<li><a href="#test-instr">Test Instructions</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contactme">Contact Me</a></li>
</ul>
<h2 id="#install">Installation Instructions</h2>
${answers.installation}
<h2 id="usage">Usage Information</h2>
${answers.usage}
<h2 id="contribution">Contribution Guidelines</h2>
${answers.contribution}
<h2 id="test-instr">Test Instructions</h2>
${answers.testinstruction}
<h2 id="license">License</h2>
${answers.license}
<h2 id="contactme">Contact Me</h2>
For any additional questions please reach out to me by email at: ${answers.email}</br>
Feel free to check out my other repositories on github! My username is ${answers.username}</br>
Click HERE to be routed to my github account`;
  fs.writeFile(generateREADME + "_README.md");
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
