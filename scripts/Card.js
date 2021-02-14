function togglePopupWindow(modal) {
    modal.classList.toggle('popup_opened');
    if (modal.classList.contains('popup_opened')) {
        document.addEventListener("keyup", handleEsc);
    } else {
        document.removeEventListener("keyup", handleEsc);
    }
}

const handleEsc = (evt) => {
    evt.preventDefault();

    const ESC_CODE = 27;
    const activePopup = document.querySelector(".popup_opened");

    if (evt.which === ESC_CODE) {
        togglePopupWindow(activePopup);
    }
}

class Card {
    constructor(data, templateSelector) {
        this._text = data.text;
        this._src = data.src;
        this._alt = data.alt
        this._templateSelector = templateSelector;
    }

    _getCardTemplate() {
        const picturesTemplate = document.querySelector(this._templateSelector).content.querySelector('.picture');

        return picturesTemplate;
    }

    _deleteCard(event) {
        const deleted = event.target.parentElement;
        const list = document.querySelector('.pictures__list');
        list.removeChild(deleted);
    }

    _toggleButton(event) {
        const likeButton = event.target;
        likeButton.classList.toggle('pictures__like_active');
    }

    _setEventListeners() {
        const likeButton = this._cardElement.querySelector('.pictures__like');
        const trashButton = this._cardElement.querySelector('.pictures__trash');
        const imagePopup = document.querySelector('.popup_type_image');
        const linkImage = this._cardElement.querySelector('.pictures__image');
        const titleName = this._cardElement.querySelector('.pictures__title');
        const popupImage = imagePopup.querySelector('.popup__image');
        const popupImageTitle = imagePopup.querySelector('.popup__image-title');

        trashButton.addEventListener('click', this._deleteCard);
        likeButton.addEventListener('click', this._toggleButton);

        linkImage.addEventListener('click', () => {
            popupImage.src = linkImage.src;
            popupImageTitle.textContent = titleName.textContent;
            popupImage.alt = titleName.textContent;

            togglePopupWindow(imagePopup);
        });
    }

    generateCard() {
        this._cardElement = this._getCardTemplate().cloneNode(true);

        const linkImage = this._cardElement.querySelector('.pictures__image');
        const titleName = this._cardElement.querySelector('.pictures__title');

        linkImage.src = this._src;
        linkImage.alt = this._alt;
        titleName.textContent = this._text;

        this._setEventListeners();

        return this._cardElement;
    }
}

export default Card;