// insert your code here:
//todo :forth exercise

//Smart-ease - Back to the basics!

//?Create a variable called notes
let notes = [];

//!OBJECT CONSTRUCTURE
// const SaveNote = function (content, id) {
//   (this.content = content), (this.id = id);
// };
// const note1 = new SaveNote("Pick up groceries", 1);
// const note2 = new SaveNote("Do laundry", 2);

// notes.push(note1);
// notes.push(note2);
// console.log(notes.note1);

//?Create a function called saveNote
const myObj = {};
function saveNote(content, id) {
  if (content) {
    const snote = {
      content: content,
      id: id,
    };
    notes.push(snote);
  }
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log("notes= ", notes);
//? Get a note
function getNote(id) {
  let specialObj = {};
  notes.forEach((el) => {
    if (el.id === id) {
      specialObj = el;
    }
  });
  return specialObj;
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  // your code here

  notes.forEach((el) => {
    console.log(
      `The note with id: ${el.id}, has the following note text: ${el.content}`
    );
  });
}

logOutNotesFormatted();

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// This you dont need to worry about yet!
const textarea = document.querySelector("textarea");
const ul = document.querySelector("ul");
let noteId = 0;
document.querySelector("button.add-note").addEventListener("click", () => {
  saveNote(textarea.value, noteId);
  noteId++;
  textarea.value = "";

  // clear the ul
  ul.innerHTML = "";
  notes.forEach((note) => {
    const li = document.createElement("li");
    li.innerHTML = note.content;
    ul.appendChild(li);
  });
});

document
  .querySelector("button.log-out")
  .addEventListener("click", logOutNotesFormatted);
