// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
//const generateMarkdown = require('.utils/generateMarkdown.js');
console.log("Welcome to README Generator.")
console.log("Answer the folowing questions to generate a quality README for your project.")
console.log(inquirer)
// TODO: Create an array of questions for user input
const questions = [
  //TITLE
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: your_Input => {
      if (your_Input) {
        return true;
      } else {
        console.log("Enter a title to continue.");
        return false;
      }
    }
  },
  //DESCRIPTION
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
    validate: your_Input => {
      if (your_Input) {
        return true;
      } else {
        console.log("Enter a description to continue.");
        return false;
      }
    }
  },
  //INSTALLATION
  {
type:"input",
name:"installation",
message:"What are the installation instructions?",
validate: your_Input => {
  if (your_Input) {
    return true;
  } else {
    console.log("Enter installation instructions to continue.");
    return false;
  }
}

  },
  //USAGE
  {
    type: "input",
    name:"usage",
    message:"Provide instructions and examples for use.",
    validate: your_Input => {
      if (your_Input) {
        return true;
      } else {
        console.log("Enter usage instructions to continue.");
        return false;
      }
    }
  },
  //CONTRIBUTION
  {
    type: "input",
    name:"contribution",
    message:"List contributors, if any, with links to their GitHub profiles and any contribution guidelines.",
  
 },
  //TESTING
  {
    type: "input",
    name:"testing",
    message:"Provide any test examples and instructions on how to run them."
  },
  //LICENSE
  {
    type: "list",
    name: "license",
    message: "What license is the project under?",
    choices: ["MIT", "IST","APACHE 2.0","None"],
  },
  //CONTACT INFORMATION FOR QUESTIONS
  {
    type: "input",
    name: "firstName",
    message:"Please enter your name."
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email?",
  },
];


inquirer
  .prompt(questions)
  .then((answers) => {
    JSON.stringify(answers)
    console.log(JSON.stringify(answers))

    // TODO: Create a function to write README file
    fs.writeFileSync("README.md", `
   # ${answers.title}
   ## Description
   ${answers.description}
   ## Table of Contents:
   + [Description](#description)
   + [License](#license)
   ## License
   [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
  
   ## Question: If you have any question, feel free to contact me at ${answers.email}.

   `

    )
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
