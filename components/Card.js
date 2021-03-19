class Card {
    constructor({ data, handleCardClick, handleDeleteCardClick }, templateSelector, api) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._api = api;
    }

    id() {
        return this._id;
    }

    _getCardTemplate() {
        const picturesTemplate = document.querySelector(this._templateSelector).content.cloneNode(true).querySelector('.picture');

        return picturesTemplate;
    }

    deleteCard() {
        this._cardElement.remove();
    }

    _toggleButton(event) {
        const likeButton = event.target;
        likeButton.classList.toggle('pictures__like_active');
    }

    _didLike(userId) {
        const owner = this._likes.find(like => like._id === userId);
        return !!owner;
    }

    _updateLikes() {
        const likeCount = this._cardElement.querySelector('.pictures__counter');
        likeCount.textContent = this._likes.length;
    }

    _setEventListeners(userId) {
        const likeButton = this._cardElement.querySelector('.pictures__like');
        const trashButton = this._cardElement.querySelector('.pictures__trash');
        const linkImage = this._cardElement.querySelector('.pictures__image');

        if (userId === this._ownerId) {
            trashButton.addEventListener('click', () => {
                this._handleDeleteCardClick(this.id());
            })
        } else {
            trashButton.style.display = "none";
        };


        likeButton.addEventListener('click', (evt) => {
            this._toggleButton(evt);

            if (this._didLike(userId)) {
                this._api.removeLike(this._id);
                this._likes = this._likes.filter(like => like._id !== userId);
            } else {
                this._api.addLike(this._id);
                this._likes.push({ _id: userId });
            };
            this._updateLikes();
        });

        linkImage.addEventListener('click', () => {
            this._handleCardClick(this._link, this._name)
        });
    }

    generateCard(userId) {
        this._cardElement = this._getCardTemplate();

        const linkImage = this._cardElement.querySelector('.pictures__image');
        const titleName = this._cardElement.querySelector('.pictures__title');
        const likeButton = this._cardElement.querySelector('.pictures__like');

        if (this._didLike(userId)) {
            likeButton.classList.add('pictures__like_active');
        }

        linkImage.src = this._link;
        titleName.textContent = this._name;

        this._updateLikes();
        this._setEventListeners(userId);

        return this._cardElement;
    }
}

export default Card;