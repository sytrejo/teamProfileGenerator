const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email){
        super(name, id, email);
        this.title = "Intern";
    }
}

module.exports = Intern;