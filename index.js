//Requirements
const linereader = require('./Classes/linereader.js')
const userMethod = require('./Classes/user.js')
const objects = require('./Classes/objects.js')

//Main
let user = new userMethod('August')
user.addInventory(objects['Rusty Knife'])
console.log(user.getInventory())