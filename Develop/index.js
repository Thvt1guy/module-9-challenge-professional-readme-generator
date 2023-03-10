// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'what will be your title name?'
},
{
    type: 'input',
    name: 'description',
    message: 'what will be your description?'
}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => { writeToFile('README.md', generateMarkdown(answers))})
}

// Function call to initialize app
init();
