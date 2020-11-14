var choseElement;

let addNoteBtn = document.getElementById('add-note-btn');

addNoteBtn.onclick = function() {
    openModalWindow('modal-window-add-note');
}

let createNoteBtn = document.getElementById('create-note-btn');
let closeModalAddBtn = document.getElementById('close-modal-add-note');

createNoteBtn.onclick = function() {
    addNote();
}
closeModalAddBtn.onclick = function() {
    closeModalWindow('modal-window-add-note');
}

function addNote() {
    let title = document.getElementById('add-note-title');
    let description = document.getElementById('add-note-description');
    let notes = document.getElementById('notes-container');

    var note = document.createElement("div");
    note.innerHTML = 
        `<div class="note-block" onclick="openModalWindow('modal-window-edit-note')">` +
            `<div class="note-title">` +
                title.value +
            `</div>` +
            `<div class="note-description">` +
                description.value +
            `</div>` +
            `<div class="btn-delete-container" onclick="openModalWindow('modal-window-delete-note'); event.stopPropagation()">` +
            `</div>` +
        `</div>`;
    notes.prepend(note);
    note.addEventListener('click', e => window.choseElement = e.target);
    note.querySelector('.btn-delete-container').addEventListener('click', e => window.choseElement = note);

    title.value = null;
    description.value = null;
    closeModalWindow('modal-window-add-note')
}