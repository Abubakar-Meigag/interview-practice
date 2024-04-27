const all = require('./users.json')

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
