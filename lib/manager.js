const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, email, id, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getOfficeNum() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
