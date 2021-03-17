import Popup from "./Popup.js";

class PopupDelete extends Popup {
    constructor(popupSelector, api) {
        super(popupSelector);
        this._button = this._popupElement.querySelector(".popup__submit_type_delete");
        this._api = api;
    }

    setDeleteFunction(deleteFunction) {
        this._deleteFunction = deleteFunction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('click', () => {
            this._deleteFunction();
        })
    }
}


export default PopupDelete;