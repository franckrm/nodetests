const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

console.log(eventEmitter)

eventEmitter.on('start', ()=>{
    console.log("Durante")
})

console.log("Antes")
eventEmitter.emit('start')
console.log('Depois')

