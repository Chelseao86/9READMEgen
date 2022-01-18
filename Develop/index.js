// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to README Generator.");
console.log("Answer the folowing questions to generate a quality README for your project.");


// TODO: Create an array of questions for user input
const questions = [
  //TITLE
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  //DESCRIPTION
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  //LICENSE
  {
    type: "list",
    name: "license",
    message: "What license is the project under?",
    choices: ["MIT", "IST", "APACHE", "MPL 2.0", "GNU", "None"],
  },
  //INSTALLATION
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  //USAGE
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  //CONTRIBUTION
  {
    type: "input",
    name: "contribution",
    message: "List contributors, if any, with links to their GitHub profiles and any contribution guidelines.",
  },
  //TESTING
  {
    type: "input",
    name: "testing",
    message: "Provide any test examples and instructions on how to run them."
  },

  //CONTACT INFORMATION FOR QUESTIONS
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub Username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email?",
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("All done, preview your README file named README.md.");
  });
};

//Initialize app   
// inquirer
//   .prompt(questions)
//   .then((answers) => {
//     JSON.stringify(answers)
   
//   },

 function init() {
     inquirer.prompt(questions)
        .then(function (answers) {
          console.log(answers)
          writeFileSync("README.md", generateMarkdown(answers));
        })
        .catch((error) => {
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          };
        });
     };


// Function call to initialize app
init();
