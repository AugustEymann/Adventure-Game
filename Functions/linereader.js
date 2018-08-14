//Requirements
const readline = require('readline');

function Prompt(question) {
    this.answer = null
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(question + '\n', (answer) => {
        this.answer = answer
        console.log(this.answer)
        rl.close();
    });

}

module.exports = Prompt