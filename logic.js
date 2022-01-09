const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = inquire('fs');
const path = require("path");

const output_directory= path.resolve(__dirname,"output");
const outputPath = path.join(output_directory, "index.html")
// const { start } = require('repl');
// const { createInflate } = require('zlib');

//console.log("Let's get started building our team!")
function start(){
    addManagerToTeam();
}

function addManagerToTeam(){
    inquirer
        .prompt([
            {
                type: "input",
                message:"What is the team manager's name?",
                name:"name",
            },
            {
                type: "input",
                message:"What is the team manager's ID?",
                name:"id",
            },
            {
                type: "input",
                message:"What is the team manager's e-mail?",
                name:"email",
            },
            {
                type: "input",
                message:"What is the team manager's office number?",
                name:"officeNumber",
        }])
            .then(val =>{
                const manager = new Manager(val.name, val.id, val.email, val.officeNumber);
                console.log(manager)
                teamMembers.push(manager);
                addTeamMembers()
            })
};

function addTeamMembers(){
    inquirer
        .prompt([
            {
                type:"list",
                message:"What is the team member's role?",
                name:"jobTitle",
                choices:["Engineer", "Intern", "Unknown"]  
            }])
        .then(val => {
            if(val.jobTitle === "Engineer"){
                engineerInfo();
            }else if(val.jobTitle === "Intern"){
                intenrInfo();
            }else {
                createFile();
            }
        })
};

function engineerInfo(){
    inquirer
        .prompt([
            {
                type: "input",
                message:"What is the engineer's name?",
                name:"name",
            },
            {
                type: "input",
                message:"What is the engineer's ID?",
                name:"id",
            },
            {
                type: "input",
                message:"What is the engineer's e-mail?",
                name:"email",
            }])
        .then(val => {
            const engineer = new Engineer(val.name, val.id, val.email);
            console.log(engineer);
            teamMembers.push(engineer);
            addTeamMembers();
        })

};

function intenrInfo(){
    inquirer
        .prompt([
            {
                type: "input",
                message:"What is the intern's name?",
                name:"name",
            },
            {
                type: "input",
                message:"What is the intern's ID?",
                name:"id",
            },
            {
                type: "input",
                message:"What is the intern's e-mail?",
                name:"email",
            }])
        .then(val => {
            const intern = new Intern(val.name, val.id, val.email);
            teamMembers.push(intern);
            addTeamMembers();
        })
};


function createFile(){
    if(!fs.existsSyng(output_directory)){
        fs.mkdirSync(output_directory)
    }
    fs.writerFileSync(outputPath, render(teamMembers),"UTF-8");
}

start();

// },
// {
//     type: "list",
//     message:"Would you like to add more team members?",
//     name:"continue",
//     choices:["yes","no"]
// }