const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function(argv) {
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Deleting a note',
    handler: function() {
        console.log("Deleting a note")
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function() {
        console.log("This is the list of all the notes")
    }
})

yargs.command({
    command: 'read',
    describe: 'Read all the notes',
    handler:  function() {
        console.log("Allowing to read all the notes")
    }
})

yargs.parse()