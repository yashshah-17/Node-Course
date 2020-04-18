const fs = require('fs')

const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const userdata = JSON.parse(dataJSON)

userdata.name = "Yash"
userdata.age = "22"

const userJSON = JSON.stringify(userdata)
fs.writeFileSync('1-json.json', userJSON)