function closeModalWindow(modalWindowId) {
    let modal = document.getElementById(modalWindowId);
    modal.style.display = "none";
}

function openModalWindow(modalWindowId) {
    let modal = document.getElementById(modalWindowId);
    modal.style.display = "block";
}