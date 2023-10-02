const cowsay = require('cowsay')
const userInfo = require('./information');

console.log(cowsay.say({
    text : `Hello I'm ${userInfo.name} from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));