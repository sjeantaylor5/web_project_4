import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit, openButton }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._openButton = openButton;
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._form = this._popupElement.querySelector('.popup__container');
        this._saveButton = this._popupElement.querySelector('.popup__submit');
    }


    _getInputValues() {
        const output = {}
        this._inputList.forEach(input => {
            output[input.name] = input.value;
        })
        return output;
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const currentText = this._saveButton.textContent;
            this._saveButton.textContent = "Saving...";
            this._handleFormSubmit(this._getInputValues()).then(() => {
                this.close();
                this._saveButton.textContent = currentText;
            })
        });
        this._openButton.addEventListener("click", () => {
            this.open();
        })
    }
}

export default PopupWithForm;