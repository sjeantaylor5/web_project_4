class Card {
    constructor({ data, handleCardClick }, templateSelector) {
        this._text = data.text;
        this._src = data.src;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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
        const linkImage = this._cardElement.querySelector('.pictures__image');

        trashButton.addEventListener('click', this._deleteCard);
        likeButton.addEventListener('click', this._toggleButton);
        linkImage.addEventListener('click', () => {
            this._handleCardClick(this._src, this._text)
        });
    }

    generateCard() {
        this._cardElement = this._getCardTemplate().cloneNode(true);

        const linkImage = this._cardElement.querySelector('.pictures__image');
        const titleName = this._cardElement.querySelector('.pictures__title');

        linkImage.src = this._src;
        titleName.textContent = this._text;

        this._setEventListeners();

        return this._cardElement;
    }
}

export default Card;