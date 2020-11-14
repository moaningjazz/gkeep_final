

function editNote() {
    let title = document.getElementById('edit-title-field');
    let description = document.getElementById('edit-text-field');

    window.choseElement.querySelector('.note-title').textContent = title.value;
    window.choseElement.querySelector('.note-description').textContent = description.value;
}