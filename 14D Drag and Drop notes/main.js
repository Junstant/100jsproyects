// call elements from dom
const notesContainer = document.querySelector('.notesContainer');
const addNote = document.querySelector('.addNote');
const trashCan = document.querySelector('.bi-trash');
const completed = document.querySelector('.bi-circle');
const calendar = document.querySelector('.calendar');

// add event listener to addNote button
addNote.addEventListener('click', addNoteFunction);

// add event listener to trashCan button
trashCan.addEventListener('click', deleteNote);

// add event listener to completed button
completed.addEventListener('click', completeNote);

function addNoteFunction() {
    // create a new note
    const fragment = document.createDocumentFragment();

    // create a div parent element
    const note = document.createElement('div');
    note.classList.add('note');

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
    dateInput.placeholder = 'Due date';
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

    // append the fragment to the notes container
    notesContainer.appendChild(fragment);
}
