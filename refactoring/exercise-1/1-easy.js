const all = require('./users.json')

// Run the code using `node refactoring/exercise-1/1-easy.js`

// Function to print details of users that need to get a vaccine
function run() {
    let output = ''
    let list = []
    for(let i=0; i<all.length; i++) {
    if((new Date(all[i].dob.date)).getFullYear() <= (new Date().getFullYear()-50)) {
        list.push(all[i])
    }
    }
    
    for(let i=0; i<list.length; i++) {
    output += list[i].name.first + "," + list[i].name.last + "," + list[i].email + "\n"
    }
    console.log(output)
}

run()
