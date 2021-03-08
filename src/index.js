import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    initialCards,
    defaultConfig,
    addCardForm,
    profileForm,
    editButton,
    addButton,
} from "../utils/constants.js";

const editFormValidator = new FormValidator(defaultConfig, profileForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(defaultConfig, addCardForm);
addFormValidator.enableValidation();

const userInfo = new UserInfo({
    userNameSelector: '.profile__title',
    userDescriptionSelector: '.profile__explorer'
});

const editPopup = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: ({ name, description }) => {
        userInfo.setUserInfo(name, description)
    },
    openButton: editButton
});
editPopup.setEventListeners();

const addpicPopup = new PopupWithForm({
    popupSelector: '.popup_type_addpic',
    handleFormSubmit: (data) => {
        const card = new Card({
            data,
            handleCardClick: (src, text) => {
                picturePopup.open(src, text);
            }
        }, ".card-template");

        cardList.prependItem(card.generateCard());
    },
    openButton: addButton
});
addpicPopup.setEventListeners();

const picturePopup = new PopupWithImage('.popup_type_image');
picturePopup.setEventListeners();

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const card = new Card({
            item,
            handleCardClick: () => {
                picturePopup.open(data);
            }
        }, ".card-template");

        cardList.addItem(card.generateCard());
    }

}, ".pictures__list");

initialCards.forEach(data => {
    const card = new Card({
        data,
        handleCardClick: (src, text) => {
            picturePopup.open(src, text);
        }
    }, ".card-template");

    cardList.addItem(card.generateCard());
});