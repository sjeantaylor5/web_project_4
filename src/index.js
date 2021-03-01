import "./index.css";
import FormValidator from "../components/FormValidator.js.js";
import Card from "../components/Card.js.js";
import Section from "../components/Section.js.js";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo.js";
import {
    initialCards,
    defaultConfig,
    list,
    addCard,
    profilePopup,
    addCardForm,
    profileForm,
    nameInput,
    aboutInput,
    editForm,
    closeButton,
    editButton,
    addButton,
    headerName,
    aboutMe,
    addForm,
    closeAddButton,
    titleInput,
    linkInput,
    imagePopup,
    closeImageButton,
    popupOverlayProfile,
    popupOverlayAddpic,
    popupOverlayImage
} from "../utils/constants.js";

// import { togglePopupWindow, handleEsc } from "../scripts/utils.js";

const editFormValidator = new FormValidator(defaultConfig, profileForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(defaultConfig, addCardForm);
addFormValidator.enableValidation();

const userInfo = new UserInfo({
    userNameSelector: nameInput,
    userDescriptionSelector: aboutInput
});

const editPopup = new PopupWithForm('.popup_type_profile');
editPopup.setEventListeners();

const addpicPopup = new PopupWithForm('.popup_type_addpic');
addpicPopup.setEventListeners();

const picturePopup = new PopupWithImage('.popup_type_image');
picturePopup.setEventListeners();

const cardList = new Section({
        data: items,
        renderer: (item) => {
            const card = new Card({
                item,
                handleCardClick: () => {
                    picturePopup.open(data);
                }
            }, ".card-template");

            cardList.addItem(card.generateCard());
        }
    },
    list
);

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