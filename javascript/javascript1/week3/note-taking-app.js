var notes = [];

function addNote(content, id){
    var newNote = new Object;
    newNote.content = content;
    newNote.id = id;
    notes.push(newNote);
}

addNote("primeira nota", 1);
addNote("segunda nota", 2);
addNote("terceira nota", 3);
addNote("quarta nota", 4);

console.log(notes);

function getNoteFromId(id){
    var logout;

    if (isNaN(id)){
        logout = "Please insert a number";
    }
    for (let i = 0; i < notes.length; i++){
        if (notes[i].id === id){
            logout = notes[i];
        } 
    }
    return logout
    }

getNoteFromId(1);
getNoteFromId(2);
getNoteFromId(3);
getNoteFromId(4);
getNoteFromId(A);

console.log(notes);

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
      console.log("The note with id:" + notes[i].id + ", has the following note text:"  + notes[i].content + ".")     
    }
  }
  logOutNotesFormatted();

