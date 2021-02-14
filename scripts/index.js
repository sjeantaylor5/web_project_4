import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

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

const defaultConfig = {
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}

const addCard = document.querySelector('.popup_type_addpic');
const profilePopup = document.querySelector('.popup_type_profile');

const addCardForm = addCard.querySelector('.popup__container');
const profileForm = profilePopup.querySelector('.popup__container');

const editFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const picturesTemplate = document.querySelector('.card-template').content.querySelector('.picture');
const list = document.querySelector('.pictures__list');
const ESC_CODE = 27;

const editForm = document.querySelector('.popup__container');
const nameInput = document.getElementById('profile-name');
const aboutInput = document.getElementById('profile-text');
const closeButton = document.querySelector('.popup__close-btn');

const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const headerName = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__explorer');

const addForm = document.querySelector('.popup__container_type_addpic');
const closeAddButton = document.querySelector('.popup__close-btn_type_addpic');
const titleInput = document.getElementById('pic-title');
const linkInput = document.getElementById('pic-url');

const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupImageTitle = imagePopup.querySelector('.popup__image-title');
const closeImageButton = imagePopup.querySelector('.popup__close-btn');

const popupOverlayProfile = document.querySelector(".popup__overlay_type_profile");
const popupOverlayAddpic = document.querySelector(".popup__overlay_type_addpic");
const popupOverlayImage = document.querySelector(".popup__overlay_type_image");

const handleEsc = (evt) => {
    evt.preventDefault();

    const activePopup = document.querySelector(".popup_opened");

    if (evt.which === ESC_CODE) {
        togglePopupWindow(activePopup);
    }
}

function togglePopupWindow(modal) {
    modal.classList.toggle('popup_opened');
    if (modal.classList.contains('popup_opened')) {
        document.addEventListener("keyup", handleEsc);
    } else {
        document.removeEventListener("keyup", handleEsc);
    }
}

function createCardElement(src, alt, text) {
    const cardElement = picturesTemplate.cloneNode(true);

    const trashButton = cardElement.querySelector('.pictures__trash');
    const linkImage = cardElement.querySelector('.pictures__image');
    const titleName = cardElement.querySelector('.pictures__title');
    const likeButton = cardElement.querySelector('.pictures__like');

    linkImage.src = src;
    linkImage.alt = alt;
    titleName.textContent = text;

    trashButton.addEventListener('click', deleteCard);
    likeButton.addEventListener('click', toggleButton);

    linkImage.addEventListener('click', () => {
        popupImage.src = src;
        popupImageTitle.textContent = text;
        popupImage.alt = alt;

        togglePopupWindow(imagePopup);
    });

    return cardElement;
}

initialCards.forEach(data => {
    const card = new Card(data, ".card-template");
    list.append(card.generateCard());
});

function addNewCard(event) {
    event.preventDefault();

    const cardElement = createCardElement(linkInput.value, titleInput.value, titleInput.value);

    list.prepend(cardElement);

    titleInput.value = "";
    linkInput.value = "";

    togglePopupWindow(addCard);
}


function deleteCard(event) {
    const deleted = event.target.parentElement;
    list.removeChild(deleted);
}

function toggleButton(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('pictures__like_active');
}

function openProfilePopup() {
    nameInput.value = headerName.innerText;
    aboutInput.value = aboutMe.innerText;

    togglePopupWindow(profilePopup);
}

function submitInput(event) {
    event.preventDefault();
    headerName.innerText = nameInput.value;
    aboutMe.innerText = aboutInput.value;

    togglePopupWindow(profilePopup);
}

editForm.addEventListener('submit', submitInput);
addForm.addEventListener('submit', addNewCard);
editButton.addEventListener('click', openProfilePopup);


closeButton.addEventListener('click', () => {
    togglePopupWindow(profilePopup);
});

addButton.addEventListener('click', () => {
    togglePopupWindow(addCard);
});

closeAddButton.addEventListener('click', () => {
    togglePopupWindow(addCard);
});

closeImageButton.addEventListener('click', () => {
    togglePopupWindow(imagePopup);
});

popupOverlayProfile.addEventListener('click', () => {
    togglePopupWindow(profilePopup);
});

popupOverlayAddpic.addEventListener('click', () => {
    togglePopupWindow(addCard);
});

popupOverlayImage.addEventListener('click', () => {
    togglePopupWindow(imagePopup);
});