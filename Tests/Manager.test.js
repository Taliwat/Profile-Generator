//Write code for tests to pass ALL for jest run for MANAGER.
const Manager = require("../lib/manager")

test("checks value of name", () => {
    const manager = new Manager("Ryan", 4, "ryan@gmail.com", "13")
    expect(manager.getName()).toEqual("Ryan")
})

test("checks value of email", () => {
    const manager = new Manager("Ryan", 4, "ryan@gmail.com", "13")
    expect(manager.getEmail()).toEqual("ryan@gmail.com")
})

test("checks value of id", () => {
    const manager = new Manager("Ryan", 4, "ryan@gmail.com", "13")
    expect(manager.getId()).toEqual(4)
})

test("checks value of officeNum", () => {
    const manager = new Manager("Ryan", 4, "ryan@gmail.com", "13")
    expect(manager.getOfficeNum()).toEqual("13")
})