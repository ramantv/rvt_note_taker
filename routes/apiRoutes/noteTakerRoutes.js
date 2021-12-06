const router = require("express").Router();
const { createNewNote, updateDb } = require("../../lib/noteUtils");
const { notes } = require("../../db/db");
const uniqueId = require("uniqid");

router.get("/notes", (req, res) => {
    let results = notes;
    console.log("In /api/notes/. Notes in db = " + notes);
    res.json(results);
})

router.post("/notes", (req, res) => {
    // generate a unique ID for this note.
    req.body.id = uniqueId();
    const note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete("/notes/:id", (req, res) => {
    const noteIdToDelete = req.params.id.toString();

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteIdToDelete) {
            notes.splice(i, 1);
        } 
    } 

    updateDb(notes);
    res.send("your note has been deleted");
});

module.exports = router;