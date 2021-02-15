function togglePopupWindow(modal) {
    modal.classList.toggle('popup_opened');
    if (modal.classList.contains('popup_opened')) {
        document.addEventListener("keyup", handleEsc);
    } else {
        document.removeEventListener("keyup", handleEsc);
    }
}

function handleEsc(evt) {
    evt.preventDefault();

    const ESC_CODE = 27;
    const activePopup = document.querySelector(".popup_opened");

    if (evt.which === ESC_CODE) {
        togglePopupWindow(activePopup);
    }
}

export { togglePopupWindow, handleEsc };