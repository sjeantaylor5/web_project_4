const picturesTemplate = document.querySelector('.card-template').content.querySelector('.picture');
const list = document.querySelector('.pictures__list');
const ESC_CODE = 27;

const profilePopup = document.querySelector('.popup_type_profile');
const editForm = document.querySelector('.popup__container');
const nameInput = document.getElementById('profile-name');
const aboutInput = document.getElementById('profile-text');
const closeButton = document.querySelector('.popup__close-btn');

const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const headerName = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__explorer');

const addpic = document.querySelector('.popup_type_addpic');
const addForm = document.querySelector('.popup__container_type_addpic');
const addCard = document.querySelector('.popup_type_addpic');
const createPic = document.querySelector('.popup__submit_type_addpic');
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
    const cardElement = createCardElement(data.src, data.alt, data.text);

    list.append(cardElement);
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