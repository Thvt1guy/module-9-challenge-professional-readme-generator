// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
},
{
    type: 'input',
    name: 'installation',
    message: 'what will be in your installation section?',
},
{
    type: 'input',
    name: 'usage',
    message: 'what will be in your usage section?',
},
{
    type: 'list',
    name: 'license',
    message: 'Which license will you be using?',
    choices: ['MIT','GPLv2','Apache' ],
},
{
    type: 'input',
    name: 'contributing',
    message: 'what will be in your contributing section?',
},
{
    type: 'input',
    name: 'tests',
    message: 'what will be in your tests section?',
},
{
    type: 'input',
    name: 'githubUsername',
    message: 'what is your Github Username?',
},
{
    type: 'input',
    name: 'email',
    message: 'what is your email?',
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error, data) => {
        if (error) {
            console.log(error);
        }
        console.log(data);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(`${answers.title}.md`, generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
