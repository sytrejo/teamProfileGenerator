const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
const generateSite = require('./source/generate-site');
const path = require("path");
const output_directory = path.resolve(__dirname, "output");
const outputPath = path.join(output_directory, "team.html");
const teamMembers =[];



const promptManager = () => {

    return inquirer.prompt([
        {                
        type: "input",
        message:"What is the team manager's name?",
        name:"name",
        },
        {
        type: "input",
        message:"What is the team manager's e-mail?",
        name:"email",
        },
        {
        type: "input",
        message:"What is the team manager's ID?",
        name:"employeeId",
        },
        {
        type: "input",
        message:"What is the team manager's office number?",
        name:"officeNumber",
    }]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
    {
    type:'list',
    name:'menu',
    message:'Please select which option you would like to continue with: ',
    choices:['add an engineer', 'add an intern', 'finish building my team']   
    }])
    .then(userChoice => {
        switch(userChoice.menu){
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default:
                buildTeam();
         }
    });
};

const promptEngineer = () => {
    console.log(`Add a New Engineer`);

    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: 'What is the name of the engineer?',
        },
        {
            type:'input',
            name:'employeeId',
            message:'What is the employeeId of the engineer?',
        },
        {
            type:'input',
            name:'email',
            message:'Enter the email address of the engineer:',
        },
        {
            type:'input',
            name:'githubUsername',
            message:'Enter the Github username for the engineer:'
        }
    ])
    .then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`Add a new Intern`);

    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the name of the intern?',
        },
        {
            type:'input',
            name:'employeeId',
            message:'Enter the employee Id for the Intern:',
        },
        {
            type:'input',
            name:'email',
            message:'Entern the email address of the Intern: ',
        },
        {
            type:'input',
            name:'school',
            message:'Enter the school name of the Intern:',
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`Finish building the team`);

    if (!fs.existsSync(output_directory)){
        fs.mkdirSync(output_directory)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();
