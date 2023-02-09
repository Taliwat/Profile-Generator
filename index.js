//Start with entry variables to be used for main JS page

    const testsEmp = require("./Tests/Employee.test")
    const testsEng = require("./Tests/Engineer.test")
    const testsInt = require("./Tests/Intern.test")
    const testsMan = require("./Tests/Manager.test")
    


const inquirer = require('inquirer');
const fs = require('fs');

// Write up Inquirer for the data needed when you run Node for a new Employee and the resulting populated data
const questions = [
    {
     type: 'input',
     name: 'NAME',
     message: 'What is the name of the new employee?',   
    },
    {
    type: 'input',
    name: 'DESCRIPTION',
    message: 'What is their new id# ?',
    },
    {
    type: 'input',
    name: 'INFORMATION',
    message: 'What is their email address?',
    },
    {
    type: 'list',
    name: 'EMPLOYEE TYPE',
    message: 'What type of employee was hired?',
    choices:    ["Engineer", "Intern", "Manager"]
    },
    {
    type: 'input',
    name: 'GITHUB',
    message: 'What is their Github username?',
    },
    {
    type: 'input',
    name: 'SCHOOL',
    message: 'What school did they go to?',
    },
    ];

    // Create a function to create new employee file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        err ? console.log(err) : console.log("Employee successfully added!")
    })
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile("index.html", tests(data))
    })
}

// Function call to initialize app
init();

//Write functions for when a specific employee is selected, as add'l info will be required and added.

// 1. For when a Manager is selected, 
function renderManagerdata(data) {
    let choice = data;
    if(choice === "None") {
      return ""
    } else {
      return ``;
    }
  }

  // 2. For when an Engineer is selected,
  function renderEngineerdata(data) {
    let choice = data;
    if(choice === "None") {
      return ""
    } else {
      return ``;
    }
  }

  // 3. For when an Intern is selected,
  function renderInterndata(data) {
    let choice = data;
    if(choice === "None") {
      return ""
    } else {
      return ``;
    }
  }

  