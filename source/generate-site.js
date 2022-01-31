const generateTeam = (team) => {
    console.log(team);
    
    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 20rem;">
        <div class="card-header">
            ${manager.name}<br/>
            <i class="fas fa-tasks" alt="icon"></i>Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.employeeId}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list=group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerHtml);
    }

        const generateEngineer = engineer => {
            console.log(engineer);
            let engineerHtml = `
            <div class="card" style="width: 20rem;">
            <div class="card-header">
            ${engineer.name}<br/>
            <i class="fas fa-glasses" alt="icon"></i>Engineer</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.employeeId}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list=group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHtml);
        }
        
        const generateIntern = intern => {
            console.log(intern);
            let internHtml = `
            <div class="card" style="width: 20rem;">
            <div class="card-header">
            ${intern.name}<br/>
            <i class="fas fa-user-graduate" alt="icon"></i>Intern</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.employeeId} </li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list=group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHtml);
    }

    // loop all employees

    for (let i = 0; i < team.length; i++){
        if (team[i].getRole() === "Manager"){
            generateManager(team[i]);
        }
        if(team[i].getRole() === "Engineer"){
            generateEngineer(team[i]);
        }
        if(team[i].getRole === "Intern"){
            generateIntern(team[i]);
        }
    }

    //to join the output into one page
    return html.join('');
}

//export function and generate the entire page

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
<body>
    <header>
        <h1> My Team</h1>
    </header>

    <main>${generateTeam(team)}</main>
    </body>
    </html>
    `;
}

