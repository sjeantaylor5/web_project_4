export const initialCards = [{
        src: "https://images.unsplash.com/photo-1463695970743-ae65cca05743?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        text: "Niagara Falls"
    },
    {
        src: "https://images.unsplash.com/photo-1525153770748-acfaa305783b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
        text: "Lake Tahoe"
    },
    {
        src: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        text: "Iceland"
    },
    {
        src: "https://images.unsplash.com/photo-1591587793878-bd37e8bd73e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80",
        text: "Washington Monument"
    },
    {
        src: "https://images.unsplash.com/photo-1587162146766-e06b1189b907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&q=80",
        text: "New York City"
    },
    {
        src: "https://images.unsplash.com/photo-1536597297293-f5adf6145863?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        text: "Pearl Harbor"
    }
];

export const defaultConfig = {
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
}

export const list = document.querySelector('.pictures__list');

export const addCard = document.querySelector('.popup_type_addpic');
export const profilePopup = document.querySelector('.popup_type_profile');
export const addCardForm = addCard.querySelector('.popup__container');
export const profileForm = profilePopup.querySelector('.popup__container');

export const editButton = document.querySelector('.profile__edit-btn');
export const addButton = document.querySelector('.profile__add-btn');