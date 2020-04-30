const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
    
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title taken')
    }
}

const removeNote = ((title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.bold.green.italic('Note has been deleted'))
    } else {
        console.log(chalk.bold.red.italic('The note does not exist'))
    }
})

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.bold(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.bold('Note not found'))
    }
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold('Your notes:'))
    notes.forEach((note) => console.log(note.title))
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)    
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        data = JSON.parse(dataJSON)
        return data
        
    } catch (e) {
         console.log('Test')
        return []
     }       

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNote, listNote,
};
