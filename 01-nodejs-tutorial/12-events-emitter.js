const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on listen to the event
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`)
});

customEmitter.on('response', () => {
    console.log(`some other logic here`)
});

//emit, emits the events
customEmitter.emit('response', 'john', 34)