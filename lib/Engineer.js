const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email){
        super(name, id, email);
        this.title = "Engineer"
    };
}

module.exports = Engineer;