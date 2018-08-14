//Requirements
const readline = require('readline');

function Prompt(question) {

    //Instance Variables
    this.answer = null;
    
    const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
    });
    rl.question(question + '\n', (answer) => {
        this.answer = answer
        rl.close();
        console.log(this.answer)
    });
}

module.exports = Prompt