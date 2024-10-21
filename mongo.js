const mongoose = require("mongoose")

if (process.env.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

mongoose.set('strictQuery', false)

mongoose.connect(
  "mongodb+srv://parthivpratimsaikia:210304Pps@cluster0.kve6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
);

const noteSchema = new mongoose.Schema({
    content: String,
    important : Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: "gaming",
    important: true,
})

note.save().then(result => {
    console.log('note saved !')
    console.log(result);
    mongoose.connection.close()
})

// Note.find({content: "I am developer"}).then((result) => {
//     result.forEach(note => {
//         console.log(note);
//     })
//     mongoose.connection.close()
// })