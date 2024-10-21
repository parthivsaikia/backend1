const mongoose = require('mongoose')
mongoose.set("strictQuery", false)

const url = process.env.MONGODB_URI

console.log('connectiong to mongodb')

mongoose.connect(url)
    .then(result => {
        console.log('connected to mongodb');                    
    }).catch(error => {
        console.log('cannot connect to mongodb', error.message);
    })

const noteSchema = new mongoose.Schema({
    note: String,
    important: Boolean,
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note',noteSchema)