//Write code for tests to pass ALL for jest run for ENGINEER.
const Engineer = require("../lib/engineer")

test("checks value of name", () => {
    const engineer = new Engineer("Ryan", 4, "ryan@gmail.com", "ryan123")
    expect(engineer.getName()).toEqual("Ryan")
})

test("checks value of email", () => {
    const engineer = new Engineer("Ryan", 4, "ryan@gmail.com", "ryan123")
    expect(engineer.getEmail()).toEqual("ryan@gmail.com")
})

test("checks value of id", () => {
    const engineer = new Engineer("Ryan", 4, "ryan@gmail.com", "ryan123")
    expect(engineer.getId()).toEqual(4)
})

test("checks value of github", () => {
    const engineer = new Engineer("Ryan", 4, "ryan@gmail.com", "ryan123")
    expect(engineer.getGithub()).toEqual("ryan123")
})
