// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: (value) => {if(value){return true} else {return `Please input a value to continue`}}
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: (value) => {if(value){return true} else {return `Please input a value to continue`}}
        },
        {
            type: 'input',
            name: 'pname',
            message: 'What is your project name?',
            validate: (value) => {if(value){return true} else {return `Please input a value to continue`}}
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
            validate: (value) => {if(value){return true} else {return `Please input a value to continue`}}
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project use?',
            choices: ['MIT', "Apache 2.0", "MPL 2.0", "IPL 1.0", "N/A"],
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            validate: (value) => {if(value){return true} else {return `Please input a value to continue`}}
        },
        {
            type: 'input',
            name: 'test',
            message: 'What is command should be run to run tests?',
            validate: (value) => {if(value){return true} else {return `Please input a value to continue`}}
        },
        {
            type: 'input',
            name: 'use',
            message: 'Is there anything that the user should know about using the repo?',
            validate: (value) => {if(value){return true} else {return `Please input a value to continue`}}
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who had helped in contributing to the repo?',
            validate: (value) => {if(value){return true} else {return `Please input a value to continue`}}
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./sample/'+fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully Generated: ' + fileName + '!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        writeToFile('SampleREADME.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
