const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [];
let id = 1;

app.get('/api/notes',(req, res)=>{
    res.json(notes);
})

app.get('/api/notes/:id', (req, res)=>{
    const note = notes.find(n=> n.id === parseInt(req.params.id));
    if(!note) return res.status(404).json({ message: 'note not found' });
    res.json(note);
})

app.post('/api/notes', (req, res)=>{
    const {title, body} = req.body;
    const newNote = {id: id++, title, body};
    notes.push(newNote);
    res.status(201).json(newNote);
})

app.put('/api/notes/:id', (req, res)=>{
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if(!note) return res.status(404).json({message: 'no note found'});
    const {title, body} = req.body;
    note.title = title ?? note.title;
    note.body = body ?? note.body;
    res.json(note);
})

app.delete('/api/notes/:id', (req, res)=>{
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
    if(noteIndex === -1) return res.status(404).json({ message: 'note unavailable'});
    notes.splice(noteIndex, 1);
    res.json({message: "note deleted"})
})

app.listen(PORT, ()=>{
    console.log(`running on port: ${PORT}`);
})