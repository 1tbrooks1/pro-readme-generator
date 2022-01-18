// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is a brief description of your project?",
        name: "description"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like for your project?",
        choices: ["MIT", "Academic", "Creative Commons"] 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
console.log(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
    .then((answers) => {
        console.log("Generating README now!");
        writeToFile("README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();