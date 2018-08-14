//Requirements
// const linereader = require('./Functions/linereader.js') I really was to lazy to make it synchronous will do it one
const readline = require('readline-sync')
const userMethod = require('./Classes/user.js')
const objects = require('./Classes/objects.js')


//Main
let user = new userMethod(readline.question('What is your name?\n'))
user.addInventory(objects['Rusty Knife'])
console.log('Welcome to the adventure game ' + user.name)