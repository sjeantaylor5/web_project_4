class Card {
    constructor({ data, handleCardClick, handleDeleteCardClick }, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._id = data.id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
    }

    id() {
        return this._id;
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

        trashButton.addEventListener('click', () => {
            this._handleDeleteCardClick(this.id());
            this._deleteCard;
        });

        likeButton.addEventListener('click', this._toggleButton);

        linkImage.addEventListener('click', () => {
            this._handleCardClick(this._link, this._name)
        });
    }

    generateCard() {
        this._cardElement = this._getCardTemplate().cloneNode(true);

        const linkImage = this._cardElement.querySelector('.pictures__image');
        const titleName = this._cardElement.querySelector('.pictures__title');

        linkImage.src = this._link;
        titleName.textContent = this._name;

        this._setEventListeners();

        return this._cardElement;
    }
}

export default Card;