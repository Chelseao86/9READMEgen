function generateMarkdown(answers) {
   return `
   # ${answers.title}
   [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
   ## Description
   ${answers.description}
   ## Table of Contents:
   + [Installation](#installation)
   + [Usage](#usage)
   + [Contribution](#contribution)
   + [Testing](#testing)  
  
   ## Questions: If you have any questions, feel free to contact ${answers.firstName} at ${answers.email}.
   `
}
module.exports=generateMarkdown