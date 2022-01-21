// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
  if (license === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-${license}_2.0-blue.svg)`;
  }
  if (license === "BSD") {
    return `![License](https://img.shields.io/badge/License-${license}_3--Clause-blue.svg)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}
   
## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
${answers.install}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributors}

## Tests
${answers.test}

## Questions
If you have any questions in regards to this project \n
You can contact me on GitHub at: https://github.com/${answers.username} \n
You can also 📧 email me at: ${answers.email} for any other questions`
}

module.exports = generateMarkdown;
