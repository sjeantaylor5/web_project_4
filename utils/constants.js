export const initialCards = [{
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

export const nameInput = document.getElementById('profile-name');
export const aboutInput = document.getElementById('profile-text');
export const titleInput = document.getElementById('pic-title');
export const linkInput = document.getElementById('pic-url');

export const editForm = document.querySelector('.popup__container');
export const closeButton = document.querySelector('.popup__close-btn');
export const editButton = document.querySelector('.profile__edit-btn');
export const addButton = document.querySelector('.profile__add-btn');
export const headerName = document.querySelector('.profile__title');
export const aboutMe = document.querySelector('.profile__explorer');

export const addForm = document.querySelector('.popup__container_type_addpic');
export const closeAddButton = document.querySelector('.popup__close-btn_type_addpic');
export const imagePopup = document.querySelector('.popup_type_image');
export const closeImageButton = imagePopup.querySelector('.popup__close-btn');

export const popupOverlayProfile = document.querySelector(".popup__overlay_type_profile");
export const popupOverlayAddpic = document.querySelector(".popup__overlay_type_addpic");
export const popupOverlayImage = document.querySelector(".popup__overlay_type_image");