const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
   const {title, content, date, author} = req.body;
   const newNote = new Note({
            title:title,
            content: content,
            date:date,
            author: author
   });

   
    await newNote.save(); //aqui guarda en la db, tambien retorna el resultado del dato guardado
    res.json({message: 'note saved'})
}

notesCtrl.getNote = async (req, res) => {    
    const note = await Note.findById(req.params.id)    
    res.json(note)
}

notesCtrl.updateNote = async (req, res) => {
    const {title, content, date, author} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id},{
        title,
        content,
        date,
        author
    });

    res.json({message: 'note updated'})

}

notesCtrl.deleteNote = async(req, res) =>{
    await Note.findOneAndDelete(req.params.id)
    res.json({message: 'note deleted'})

}

module.exports = notesCtrl;