//Write code for tests to pass ALL for jest run for INTERN.
const Intern = require("../lib/intern")

test("checks value of name", () => {
    const intern = new Intern("Ryan", 4, "ryan@gmail.com", "MSU")
    expect(intern.getName()).toEqual("Ryan")
})

test("checks value of email", () => {
    const intern = new Intern("Ryan", 4, "ryan@gmail.com", "MSU")
    expect(intern.getEmail()).toEqual("ryan@gmail.com")
})

test("checks value of id", () => {
    const intern = new Intern("Ryan", 4, "ryan@gmail.com", "MSU")
    expect(intern.getId()).toEqual(4)
})

test("checks value of school", () => {
    const intern = new Intern("Ryan", 4, "ryan@gmail.com", "MSU")
    expect(intern.getSchool()).toEqual("MSU")
})