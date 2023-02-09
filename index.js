//Start with entry variables to be used for main JS page
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// const base = require("./src/generate")

const inquirer = require("inquirer");
const fs = require("fs");

let team = [];

const menu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "addMore",
        messsage: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((res) => {
      if (res.addMore === "Engineer") {
        renderEngineerdata()
      } else if(res.addMore === "Intern") {
        renderInterndata()
      } else if( res.addMore === "Done") {
        console.log("-------Finished-------")
        console.log(team)
      }
    });
};

// 1. For when a Manager is selected,
const renderManagerdata = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the new Manager?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the new Manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is their office number?",
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNum } = managerData;
      const manager = new Manager(name, id, email, officeNum);
      team.push(manager);
      menu();
    });
};

// 2. For when an Engineer is selected,
const renderEngineerdata = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the new Engineer?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the new Engineer id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is their Github username?",
      },
    ])
    .then((engineerData) => {
      const { name, id, email, github } = engineerData;
      const engineer = new Engineer(name, id, email, github);
      team.push(engineer);
      menu();
    });
};

// 3. For when an Intern is selected,
const renderInterndata = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the new Intern?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the new Interns id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the name of the school they went to?",
      },
    ])
    .then((internData) => {
      const { name, id, email, school } = internData;
      const intern = new Intern(name, id, email, school);
      team.push(intern);
      menu();
    });
};

renderManagerdata();



