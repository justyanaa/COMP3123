const app = require("../server");
const express = require('express');
const router = express.Router();

const NoteModel = require('../models/NotesModel.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {

    try{
        const newNote = new NoteModel({
            ...req.body
        })
        await newNote.save()
        res.status(200).send(newNote)
    }catch(error){
        res.status(500).send(error)
    }

});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    
    try{
        const noteList = await NoteModel.find({})
        res.status(200).send(noteList)
    }catch(error){
        res.status(500).send(error)
    }

});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    
    const noteId = req.params.noteId;

    NoteModel.findById(noteId)
        .then(note => {
            if (!note) {
                res.status(404).send({
                    message: "Note not found"
                });
            } else {
                res.status(200).json(note);
            }
        })

        .catch(error => {
            res.status(500).send({
                message: "An error occurred while fetching the note",
                error: error.message
            });
        });

});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    
    const noteId = req.params.noteId;
    const updatedContent = req.body;

    try {
        const updatedNote = await NoteModel.findByIdAndUpdate(
            noteId,
            updatedContent,
            { new: true } 
        );

        if (!updatedNote) {
            return res.status(404).send({
                message: "Note not found"
            });
        }

        updatedNote.dateUpdated = new Date()

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({
            message: "An error occurred while updating the note",
            error: error.message
        });
    }
});


//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    
    try{
        const note = await NoteModel.findOneAndDelete(req.params.noteId)
        if(!note){
            res.status(200).send({message: "Note Not Found"})
        }else{
            res.status(200).send(note)
        }
    }catch(error){
        res.status(500).send(error)
    }
});

module.exports = router;

