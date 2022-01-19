// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
  }
  if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-${license}_2.0-blue.svg)]`;
  }
  if (license === "BSD") {
    return `[![License](https://img.shields.io/badge/License-${license}_3--Clause-blue.svg)]`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
