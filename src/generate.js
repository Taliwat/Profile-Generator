const managerContent = (data) => {
    return `<section class="manager">
        <h1>Manager</h1>
        <h3>Name: ${data.NAME}</h3>
        <h3>ID: ${data.ID}</h3>
        <h3>Email: ${data.EMAIL}</h3>
        <h3>Office: ${data.OFFICENUMBER}</h3>
    </section>`
}

const engineerContent = (data) => {
    return `<section class="engineer">
        <h1>Engineer</h1>
        <h3>Name: ${data.NAME}</h3>
        <h3>ID: ${data.ID}</h3>
        <h3>Email: ${data.EMAIL}</h3>
        <h3>GitHub: ${data.GITHUB}</h3>
    </section>`
}

const internContent = (data) => {
    return `<section class="intern">
        <h1>Intern</h1>
        <h3>Name: ${data.NAME}</h3>
        <h3>ID: ${data.ID}</h3>
        <h3>Email: ${data.EMAIL}</h3>
        <h3>School: ${data.SCHOOL}</h3>
    </section>`
}

const middleMan = (data) => {
    for(let i = 0; i < data.length; i++) {
        if(data[i] === "Engineer") {
            return engineerContent(data)
        }
        if(data[i] === "Intern") {
            return internContent(data)
        }
    }
}

const base = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Profile Generator</title>
        <link href="styles.css" rel="stylesheet" type="text/css">
    </head>
        </nav>My Team</nav>
    <body>
    <main class="content">
    ${managerContent(data)}
    ${middleMan(data)}
    middle
    </main>
        
    </body>
    </html>`
}

module.exports = base(data);