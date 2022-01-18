function generateMarkdown(answers) {
   return `
   # ${answers.title}
   ## License
   [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
   ## Description
   ${answers.description}
   ## Table of Contents:
   + [License](#license)
   + [Description](#description)
   + [Installation](#installation)
   + [Usage] (#usage)
   + [Contribution] (#contribution)
   + [Testing] (#testing)  
  
  
   ## Questions: If you have any questions, feel free to contact ${answers.firstName} at ${answers.email}.

   `
}
