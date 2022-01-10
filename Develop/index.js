// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

console.log(inquirer)

// TODO: Create an array of questions for user input
const questions = [{
  type:"input",
  name:"title",
  message:"What is your project title?",
},
{
  type:"input",
  name:"description",
  message:"What is your project desription?",
},
{
  type:"list",
  name:"license",
  message:"What license is the project under?",
  choices:["MIT","IST"],
},
{
  type:"input",
  name:"email",
  message:"What is your email?",
}
];

inquirer
  .prompt(questions)
  .then((answers) => {
    JSON.stringify(answers)
    console.log(JSON.stringify(answers))
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

  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
