import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDelete from "../components/PopupDelete.js";
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
    avatarPic,
} from "../utils/constants.js";

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
        authorization: "eff000d8-7eb0-4383-a680-82894073e363",
        "Content-Type": "application/json"
    }
});

const userInfo = new UserInfo({
    userNameSelector: '.profile__title',
    userDescriptionSelector: '.profile__explorer',
    nameInput: 'profile-name',
    descriptionInput: 'profile-text',
    avatar: ".profile__avatar"

});

api.getUserInfo()
    .then(res => {
        userInfo.setUserInfo(res.name, res.about, res._id, res.avatar);

        api.getCardList().then(res => {
            const cardList = new Section({
                data: res,
                renderer: (data) => {
                    const card = new Card({
                        data,
                        handleCardClick: (name, link) => {
                            picturePopup.open(name, link);
                        },
                        handleDeleteCardClick: () => {
                            deleteCard.open();
                            deleteCard.setDeleteFunction(() => {
                                api.removeCard(card.id())
                                    .then(() => {
                                        card.deleteCard();
                                        deleteCard.close();
                                    })
                                    .catch((err) => console.log(err));
                            })
                        }
                    }, ".card-template", api);

                    cardList.addItem(card.generateCard(userInfo.id));
                }

            }, ".pictures__list");

            cardList.renderItems();

            const addpicPopup = new PopupWithForm({
                popupSelector: '.popup_type_addpic',
                handleFormSubmit: (data) => {
                    return api.addCard(data)
                        .then(res => {
                            const card = new Card({
                                data: res,
                                handleCardClick: (name, link) => {
                                    picturePopup.open(name, link);
                                },
                                handleDeleteCardClick: () => {
                                    deleteCard.open();
                                    deleteCard.setDeleteFunction(() => {
                                        api.removeCard(card.id())
                                            .then(() => {
                                                card.deleteCard();
                                                deleteCard.close();
                                            })
                                            .catch((err) => console.log(err));
                                    })
                                }
                            }, ".card-template", api);
                            cardList.prependItem(card.generateCard(userInfo.id))
                        })
                        .catch((err) => console.log(err));
                },
                openButton: addButton
            });
            addpicPopup.setEventListeners();
        });
    })
    .catch((err) => console.log(err));

const editFormValidator = new FormValidator(defaultConfig, profileForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(defaultConfig, addCardForm);
addFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(defaultConfig, avatarForm);
avatarFormValidator.enableValidation();

const editPopup = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: ({ name, description }) => {
        return api.setUserInfo({ name, about: description })
            .then(res => {
                userInfo.setUserInfo(res.name, res.about, res._id, res.avatar)
            })
            .catch((err) => console.log(err));
    },
    openButton: editButton
});
editPopup.setEventListeners();

const editAvatar = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (res) => {
        return api.setUserAvatar({ avatar: res.link })
            .then(res => {
                avatarPic.src = res.avatar
            })
            .catch((err) => console.log(err));
    },
    openButton: editAvatarButton
});
editAvatar.setEventListeners();

const picturePopup = new PopupWithImage('.popup_type_image');
picturePopup.setEventListeners();

const deleteCard = new PopupDelete('.popup_type_delete', api);
deleteCard.setEventListeners();