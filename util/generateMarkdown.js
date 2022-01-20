// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return " ";
  }
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
  console.log(answers);
  return `# ${answers.title}

## 📚 Table of Contents:
- [Description](#Description)
- [Installation](#Installation)
- [License](#License)
- [GitHub](#Github)
- [Email](#Email)


  ## ✏️ Description
  ${answers.description}

  ## 🔨  Installation
  ${answers.install}

  ##  License
  ${renderLicenseBadge(answers.license)}

  ## GitHub
  ${answers.username}

  ## 📧 Email
  ${answers.email}`;
}

module.exports = generateMarkdown;
