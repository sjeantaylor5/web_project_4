const popup = document.querySelector('.popup');
const addpic = document.querySelector('.popup_type_addpic');
const editForm = document.querySelector('.popup__container');
const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const addCard = document.querySelector('.popup_type_addpic');
const createPic = document.querySelector('.popup__submit_type_addpic');
const closeAddButton = document.querySelector('.popup__close-btn_type_addpic');
const closeButton = document.querySelector('.popup__close-btn');
const nameInput = document.querySelector('.popup__name-input');
const aboutInput = document.querySelector('.popup__about-input');
const titleInput = document.querySelector('.popup__name-input_type_addpic');
const linkInput = document.querySelector('.popup__about-input_type_addpic');
const headerName = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__explorer');
const picturesTemplate = document.querySelector('.pictures');

const initialCards = [{
        src: "https://images.unsplash.com/photo-1463695970743-ae65cca05743?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        alt: "Waterfall",
        text: "Niagara Falls"
    },
    {
        src: "https://images.unsplash.com/photo-1525153770748-acfaa305783b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
        alt: "Lake",
        text: "Lake Tahoe"
    },
    {
        src: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        alt: "Northern Lights",
        text: "Iceland"
    },
    {
        src: "https://images.unsplash.com/photo-1591587793878-bd37e8bd73e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80",
        alt: "Washington Monument",
        text: "Washington Monument"
    },
    {
        src: "https://images.unsplash.com/photo-1587162146766-e06b1189b907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&q=80",
        alt: "City Skyline",
        text: "New York City"
    },
    {
        src: "https://images.unsplash.com/photo-1536597297293-f5adf6145863?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        alt: "The Harbor",
        text: "Pearl Harbor"
    }
];

const cardElements = initialCards.map(card => {
    return createCard(card.src, card.alt, card.text);
});

picturesTemplate.append(...cardElements);


function createCard(src, alt, text) {
    const cardBlock = document.createElement('div');
    const trashButton = document.createElement('button');
    const linkImage = document.createElement('img');
    const titleName = document.createElement('h2');
    const likeButton = document.createElement('button');

    cardBlock.classList.add('pictures__picture');
    trashButton.classList.add('pictures__trash');
    linkImage.classList.add('pictures__image');
    titleName.classList.add('pictures__title');
    likeButton.classList.add('pictures__like');

    linkImage.setAttribute('src', src);
    linkImage.setAttribute('alt', alt);
    titleName.innerText = text;

    trashButton.addEventListener('click', deleteCard);
    likeButton.addEventListener('click', toggleButton);

    cardBlock.append(...[trashButton, linkImage, titleName, likeButton]);
    return cardBlock;
}


function openPopup() {
    nameInput.value = headerName.innerText;
    aboutInput.value = aboutMe.innerText;
    popup.classList.add('popup_opened');
}

function openAddpic() {
    addpic.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function closeAddpic() {
    addpic.classList.remove('popup_opened');
}

function addNewCard(event) {
    event.preventDefault();
    const title = titleInput.value;
    const link = linkInput.value;
    const cardBlock = createCard(link, title, title);
    picturesTemplate.prepend(cardBlock);
    titleInput.value = "";
    linkInput.value = "";
    closeAddpic();
}

function deleteCard(event) {
    const deleted = event.target.parentElement;
    picturesTemplate.removeChild(deleted);
}

function toggleButton(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('pictures__like_active');
}

function submitInput(event) {
    event.preventDefault();
    headerName.innerText = nameInput.value;
    aboutMe.innerText = aboutInput.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
editForm.addEventListener('submit', submitInput);
addButton.addEventListener('click', openAddpic);
createPic.addEventListener('click', addNewCard);
closeAddButton.addEventListener('click', closeAddpic);