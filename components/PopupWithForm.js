import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit, openButton, handleClose }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._openButton = openButton;
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._handleClose = handleClose;
    }


    _getInputValues() {
        const output = {}
        this._inputList.forEach(input => {
            output[input.name] = input.value;
        })
        return output;
    }

    close() {
        this._handleClose(this._popupElement);
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
        this._openButton.addEventListener("click", () => {
            this.open();
        })
    }
}

export default PopupWithForm;