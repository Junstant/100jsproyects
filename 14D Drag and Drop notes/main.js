// call elements from dom
const notesContainer = document.querySelector('.notesContainer');
const addNote = document.querySelector('.addNote');
const trashCan = document.querySelector('.bi-trash');
const completed = document.querySelector('.completedButton');
const calendar = document.querySelector('.calendar');
const note = document.querySelector('.note');

// add event listener to addNote button
addNote.addEventListener('click', addNoteFunction);
// note identifier for each card
let noteIdentifier = 0;


//make the add note feature
function addNoteFunction() {
    // create a new note
    const fragment = document.createDocumentFragment();

    // create a div parent element
    const note = document.createElement('div');
    note.classList.add('note');
    note.classList.add(`A`+`${noteIdentifier}`);

    // create a div header element
    const noteHeader = document.createElement('div');
    noteHeader.classList.add('noteHeader');

    // create title input
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Your title here...';

    //create thrash icon
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('bi', 'bi-trash');
    // make the delete note clicked by trash feature
    trashIcon.addEventListener('click', () => {
        note.remove();
    });

    // create the thext area container
    const textAreaContainer = document.createElement('div');
    textAreaContainer.classList.add('text');

    // create the text area
    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Type something...';

    // create the footer
    const noteFooter = document.createElement('div');
    noteFooter.classList.add('footer');

    //creates the 1st div inside footer
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('completedButton');
    firstDiv.classList.add(`B`+`${noteIdentifier}`);

    //creates the span text inside the first div
    const spanText = document.createElement('span');
    spanText.textContent = 'Completed';

    //creates the circle icon inside the first div
    const circleIcon = document.createElement('i');
    circleIcon.classList.add('bi', 'bi-circle');

    //creates the 2nd div inside footer
    const secondDiv = document.createElement('div');

    //creates the calendar icon inside the second div
    const calendarIcon = document.createElement('i');
    calendarIcon.classList.add('bi', 'bi-calendar3');

    //creates the date input inside the second div
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.classList.add('calendar');

    // append the elements to the note header
    noteHeader.appendChild(titleInput);
    noteHeader.appendChild(trashIcon);

    // append the elements to the text area container
    textAreaContainer.appendChild(textArea);

    // append the elements to the first div
    firstDiv.appendChild(circleIcon);
    firstDiv.appendChild(spanText);

    // append the elements to the second div
    secondDiv.appendChild(calendarIcon);
    secondDiv.appendChild(dateInput);

    // append the elements to the footer
    noteFooter.appendChild(firstDiv);
    noteFooter.appendChild(secondDiv);

    // append the elements to the note
    note.appendChild(noteHeader);
    note.appendChild(textAreaContainer);
    note.appendChild(noteFooter);

    // append the note to the fragment
    fragment.appendChild(note);

    // insert the framgent note before the addNote button
    notesContainer.insertBefore(fragment, addNote);

    // add event listener to the completed button
    let completedButton = note.querySelector('.completedButton');
    completedButton.addEventListener('click', () => {
        completeNote(note, noteIdentifier);
    });

    noteIdentifier++;
}


//make the completed note feature
function completeNote(note, noteIdentifier) {
    // Toggle 'completed' class for the specific note
    note.classList.toggle('completed');
}

// make the drag and drop feature
function makeNoteDraggable(note) {
    note.draggable = true;

    note.addEventListener('dragstart', dragStart);
    note.addEventListener('dragend', dragEnd);
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.classList.add('dragging');
}

function dragEnd(event) {
    event.target.classList.remove('dragging');
}

// add event listener to the note container for drag and drop
notesContainer.addEventListener('dragover', dragOver);
notesContainer.addEventListener('dragenter', dragEnter);
notesContainer.addEventListener('dragleave', dragLeave);
notesContainer.addEventListener('drop', drop);

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    notesContainer.classList.add('dragging-over');
}

function dragLeave(event) {
    notesContainer.classList.remove('dragging-over');
}

function drop(event) {
    event.preventDefault();
    const noteId = event.dataTransfer.getData('text/plain');
    const note = document.getElementById(noteId);
    notesContainer.insertBefore(note, event.target);
    notesContainer.classList.remove('dragging-over');
}

// call makeNoteDraggable function for each note
const allNotes = document.querySelectorAll('.note');
allNotes.forEach(makeNoteDraggable);