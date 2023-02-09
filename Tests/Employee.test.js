//Write code for tests to pass ALL for jest run for EMPLOYEE.
const Employee = require("../lib/employee")

test("checks value of name", () => {
    const employee = new Employee("Ryan", "ryan@gmail.com", 4)
    expect(employee.getName()).toEqual("Ryan")
})

test("checks value of id", () => {
    const employee = new Employee("Ryan", "ryan@gmail.com", 4)
    expect(employee.getId()).toEqual(4)
})

test("checks value of email", () => {
    const employee = new Employee("Ryan", "ryan@gmail.com", 4)
    expect(employee.getEmail()).toEqual("ryan@gmail.com")
})








