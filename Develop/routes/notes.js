const fs = require('fs');
const app = require('express').Router();

app.get('/notes', (req, res)=>{
    fs.readFile('db/db.json', 'utf8', (err,data)=>{
        console.log(data)
            return res.json(JSON.parse(data));
})});
app.post('/notes', (req, res,) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
      console.log(err);
    const noteList = JSON.parse(data);
    const { title, text } = req.body

    if(req.body){
        const newNote = {
            title,
            text,
            noteId: '1'
        };
        noteList.push(newNote);
    }
})});