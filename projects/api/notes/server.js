const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notes-api')
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const Note = mongoose.model('Note', new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true }
}, { timestamps: true }));

app.get('/api/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.get('/api/notes/:id', async(req, res)=>{
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({ message: 'note not found' });
    res.json(note);
})

app.post('/api/notes', async (req, res)=>{
    const {title, body} = req.body;
    const newNote = new Note({ title, body });
    await newNote.save();
    res.status(201).json(newNote);
})

app.put('/api/notes/:id', async (req, res) => {
  const { title, body } = req.body;
  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    { title, body },
    { new: true }
  );
  if (!updatedNote) return res.status(404).json({ message: 'no note found' });
  res.json(updatedNote);
});

app.delete('/api/notes/:id', async (req, res)=>{
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: 'note unavailable' });
    res.json({message: "note deleted"})
})

app.listen(PORT, ()=>{
    console.log(`running on port: ${PORT}`);
})