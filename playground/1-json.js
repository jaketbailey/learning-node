const fs = require('fs')

const dataBuffer = fs.readFileSync('test.json')
const dataJSON = dataBuffer.toString()
console.log(dataJSON)
const data = JSON.parse(dataJSON)

data.name = 'Thomas'
data.age = 29

const nameJSON = JSON.stringify(data)

fs.writeFileSync('test.json' , nameJSON)