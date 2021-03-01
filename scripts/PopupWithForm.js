import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }


    _getInputValues() {
        this._popupElement.getElementById('profile-name').value = document.querySelector('.profile__title').innerText;
        this._popupElement.getElementById('profile-text').value = document.querySelector('.profile__explorer').innerText;
    }

    setEventListeners() {
        this._popupElement.addEventListener("click", super.close);
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            if (evt.target.classList.contains('popup__submit')) {
                super.close();
            }
        });
    }

    close() {
        this._popupElement.getElementById('profile-name').value = "";
        this._popupElement.getElementById('profile-text').value = "";
        super.close();
    }
}

export default PopupWithForm;