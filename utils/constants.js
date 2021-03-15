export const defaultConfig = {
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
};

export const addCard = document.querySelector('.popup_type_addpic');
export const profilePopup = document.querySelector('.popup_type_profile');
export const avatarPopup = document.querySelector('.popup_type_avatar');

export const addCardForm = addCard.querySelector('.popup__container');
export const profileForm = profilePopup.querySelector('.popup__container');
export const avatarForm = avatarPopup.querySelector('.popup__container');

export const editButton = document.querySelector('.profile__edit-btn');
export const addButton = document.querySelector('.profile__add-btn');
export const editAvatarButton = document.querySelector('.profile__avatar_btn');