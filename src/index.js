import "./index.css";
import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import Section from "../scripts/Section.js";
import PopupWithImage from "../scripts/PopupWithImage";
import PopupWithForm from "../scripts/PopupWithForm";
import { togglePopupWindow, handleEsc } from "../scripts/utils.js";
import { initialCards } from "../scripts/array.js";

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

const nameInput = document.getElementById('profile-name');
const aboutInput = document.getElementById('profile-text');

const editFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const editPopup = new PopupWithForm('.popup_type_profile');
editPopup.setEventListeners();

const addpicPopup = new PopupWithForm('.popup_type_addpic');
addpicPopup.setEventListeners();

const picturePopup = new PopupWithImage('.popup_type_image');
picturePopup.setEventListeners();

const userInfo = new UserInfo({
    userNameSelector: nameInput,
    userDescriptionSelector: aboutInput
});

const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = new Card({
            data,
            handleCardClick: () => {
                picturePopup.open(data);
            }
        }, ".card-template");

        cardList.addItem(card.generateCard());
    }
});


const list = document.querySelector('.pictures__list');

const editForm = document.querySelector('.popup__container');
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
const closeImageButton = imagePopup.querySelector('.popup__close-btn');

const popupOverlayProfile = document.querySelector(".popup__overlay_type_profile");
const popupOverlayAddpic = document.querySelector(".popup__overlay_type_addpic");
const popupOverlayImage = document.querySelector(".popup__overlay_type_image");

initialCards.forEach(data => {
    const card = new Card({
        data,
        handleCardClick: (src, text) => {
            picturePopup.open(src, text);
        }
    }, ".card-template");
    list.append(card.generateCard());
});

function addNewCard(event) {
    event.preventDefault();

    const inputData = {
        src: linkInput.value,
        alt: titleInput.value,
        text: titleInput.value
    };

    const newCard = new Card({
        inputData,
        handleCardClick: (src, text) => {
            picturePopup.open(src, text);
        }
    }, ".card-template");

    list.prepend(newCard.generateCard());

    titleInput.value = "";
    linkInput.value = "";

    togglePopupWindow(addCard);
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