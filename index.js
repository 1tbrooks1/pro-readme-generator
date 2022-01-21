// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false; 
            }
        }
    },
    {
        type: "input",
        message: "What is a brief description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What does a user need to install to preview your project?",
        name: "install"
    },
    {
        type: "input",
        message: "What is the usage of your project?",
        name: "usage"
    },
    {
        type: "list",
        name: "license",
        message: "What license did you choose for your project?",
        choices: ["MIT", "ISC", "Apache", "BSD"] 
    },
    {
        type: "input",
        message: "How could someone contribute to this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "Enter instructions if someone wanted to test your project:",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        validate: (nameInput) =>{
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name for your GitHub username.");
            }
        }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
];

// TODO: Create a function to write README file
const writeToFile = (answers) => {
    fs.writeFile("./dist/README.md", answers, err => {
        if (err) {
            console.log(err);
            return;
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
    .then((answers) => {
        writeToFile(generateMarkdown(answers), "README.md");
        console.log("✔️  Generating README now!");
    })
}


// Function call to initialize app
init();




