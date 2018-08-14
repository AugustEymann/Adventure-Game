//Requirements
//const linereader = require('./Functions/linereader.js')
const readline = require('readline-sync')
const userMethod = require('./Classes/user.js')
const objects = require('./Classes/objects.js')


//Main
let name = readline.question('What is your name?\n')
let user = new userMethod(name)
user.addInventory(objects['Rusty Knife'])
console.log('Welcome to the adventure game' + user.name)