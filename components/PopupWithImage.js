import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector('.popup__image');
        this._text = this._popupElement.querySelector('.popup__image-title');
    }

    open(src, text) {
        this._image.src = src;
        this._text.textContent = text;
        super.open();
    }
}

export default PopupWithImage;