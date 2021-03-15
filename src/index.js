import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
    defaultConfig,
    addCardForm,
    profileForm,
    avatarForm,
    editButton,
    addButton,
    editAvatarButton,
} from "../utils/constants.js";

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
        authorization: "eff000d8-7eb0-4383-a680-82894073e363",
        "Content-Type": "application/json"
    }
});

api.getCardList().then(res => {
    const cardList = new Section({
        data: res,
        renderer: (data) => {
            const card = new Card({
                data,
                handleCardClick: (name, link) => {
                    picturePopup.open(name, link);
                },
                handleDeleteCardClick: (cardId) => {
                    api.removeCard(cardId).then(res);
                }
            }, ".card-template");

            cardList.addItem(card.generateCard());
        }

    }, ".pictures__list");

    cardList.renderItems();

    const addpicPopup = new PopupWithForm({
        popupSelector: '.popup_type_addpic',
        handleFormSubmit: (data) => {
            api.addCard(data).then(res => {
                const card = new Card({
                    data,
                    handleCardClick: (name, link) => {
                        picturePopup.open(name, link);
                    }
                }, ".card-template");
                cardList.prependItem(card.generateCard())
            });
        },
        openButton: addButton
    });
    addpicPopup.setEventListeners();
})

const editFormValidator = new FormValidator(defaultConfig, profileForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(defaultConfig, addCardForm);
addFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(defaultConfig, avatarForm);
avatarFormValidator.enableValidation();

const userInfo = new UserInfo({
    userNameSelector: '.profile__title',
    userDescriptionSelector: '.profile__explorer'
});

api.getUserInfo().then(res => {
    userInfo.setUserInfo({
        name: res.name,
        description: res.about
    })
});

const editPopup = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: ({ name, description }) => {
        userInfo.setUserInfo(name, description)
    },
    openButton: editButton
});
editPopup.setEventListeners();

const editAvatar = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (avatar) => {
        api.setUserAvatar(avatar);
    },
    openButton: editAvatarButton
});
editAvatar.setEventListeners();

const picturePopup = new PopupWithImage('.popup_type_image');
picturePopup.setEventListeners();