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

    // creates the 3rd div inside footer
    const thirdDiv = document.createElement('div');
    const gripIcon = document.createElement('i');
    gripIcon.classList.add('bi', 'bi-grip-horizontal');

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

    // append the elements to the third div
    thirdDiv.appendChild(gripIcon);

    // append the elements to the footer
    noteFooter.appendChild(firstDiv);
    noteFooter.appendChild(thirdDiv);
    noteFooter.appendChild(secondDiv);

    // append the elements to the note
    note.appendChild(noteHeader);
    note.appendChild(textAreaContainer);
    note.appendChild(noteFooter);

    // append the note to the fragment
    fragment.appendChild(note);

    // insert the framgent note before the addNote button
    notesContainer.insertBefore(fragment, addNote);

    // add initial status for the note
    note.classList.add('uncompleted');

    // add event listener to the completed button
    let completedButton = note.querySelector('.completedButton');
    completedButton.addEventListener('click', () => {
        completeNote(note, noteIdentifier);
    });

    noteIdentifier++;
}
// ! make the completed note feature

function completeNote(note, noteIdentifier) {
    // Toggle 'completed' class for the specific note
    note.classList.toggle('completed');
    // switch the icon
    switchIcon(note, noteIdentifier);
}

// ! switch icons when the note is completed/uncompleted
function switchIcon(note, noteIdentifier) {
    let initalStatus = note.classList.contains('completed') ? 1 : 0;
    if (initalStatus == 1) {
        let uncompletedIcon = note.querySelector('.bi-circle');
        uncompletedIcon.classList.add('bi-check-circle');
        uncompletedIcon.classList.remove('bi-circle');
    } else {
        let completedIcon = note.querySelector('.bi-check-circle');
        completedIcon.classList.add('bi-circle');
        completedIcon.classList.remove('bi-check-circle');
    }
}

// ! make the drag and drop feature
let draggedNote = null;

notesContainer.addEventListener('dragstart', (e) => {
    draggedNote = e.target;
     //disable inside note elements to be draggable
     note.querySelectorAll('input').forEach(input => input.setAttribute('draggable', false));
     note.querySelectorAll('i').forEach(input => input.setAttribute('draggable', false));
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
});

notesContainer.addEventListener('dragend', (e) => {
    setTimeout(() => {
        e.target.style.display = "block";
        draggedNote = null;
    }, 0);
});

notesContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(notesContainer, e.clientY);
    if (afterElement == null) {
        notesContainer.appendChild(draggedNote);
    } else {
        notesContainer.insertBefore(draggedNote, afterElement);
    }
});

const getDragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.note:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return {
                offset: offset,
                element: child
            };
        } else {
            return closest;
        }
    }, {
        offset: Number.NEGATIVE_INFINITY
    }).element;
};

//if the user holds the note for 2 seconds, the note will be dragged
notesContainer.addEventListener('mousedown', (e) => {
    let target = e.target;
    let note = target.closest('.note');
    if (!note) return;
    let timer = setTimeout(() => {
        note.classList.add('dragging');
        note.setAttribute('draggable', true);
    }, 2000);
    notesContainer.addEventListener('mouseup', () => {
        clearTimeout(timer);
    });
});

//make addnote always at the end
notesContainer.addEventListener('dragend', (e) => {
    notesContainer.appendChild(addNote);
});

//save the notes to local storage when the page is refreshed
window.addEventListener('beforeunload', () => {
    let notes = notesContainer.querySelectorAll('.note');
    let notesArray = [];
    notes.forEach(note => {
        let noteObject = {
            title: note.querySelector('input').value,
            text: note.querySelector('textarea').value,
            date: note.querySelector('input[type="date"]').value,
            status: note.classList.contains('completed') ? 1 : 0
        };
        notesArray.push(noteObject);
    });
    localStorage.setItem('notes', JSON.stringify(notesArray));
});

//load the notes from local storage when the page is refreshed
window.addEventListener('load', () => {
    let notesArray = JSON.parse(localStorage.getItem('notes'));
    if (notesArray) {
        notesArray.forEach(note => {
            addNoteFunction();
            let notes = notesContainer.querySelectorAll('.note');
            let currentNote = notes[notes.length - 1];
            currentNote.querySelector('input').value = note.title;
            currentNote.querySelector('textarea').value = note.text;
            currentNote.querySelector('input[type="date"]').value = note.date;
            if (note.status == 1) {
                completeNote(currentNote, noteIdentifier);
            }
        });
    }
});