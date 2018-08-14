//Requirements
// const linereader = require('./Functions/linereader.js') I really was to lazy to make it synchronous will do it one
const readline = require('readline-sync')
const userClass = require('./Classes/user')
const gameClass = require('./Classes/game')
const objects = require('./Classes/objects')


//Main
let game = new gameClass();
let user = new userClass(readline.question('Do you remember your name?\n'))
user.addInventory(objects['Rusty Knife'])
console.log('Welcome to the adventure game ' + user.name)
console.log('You were born in ' + game.starting) 