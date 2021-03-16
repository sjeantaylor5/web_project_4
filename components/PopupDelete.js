import Popup from "./Popup.js";

class PopupDelete extends Popup {
    constructor(popupSelector, api) {
        super(popupSelector);
        this._button = this._popupElement.querySelector(".popup__submit_type_delete");
        this._api = api;
    }

    setDeleteId(id) {
        this._id = id;
    }

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('click', () => {
            this._api.removeCard(this._id);
            this.close();
        })
    }
}


export default PopupDelete;