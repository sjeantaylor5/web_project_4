const profilePopup = document.querySelector('.popup_type_profile');
const imagePopup = document.querySelector('.popup_type_image');
const addpic = document.querySelector('.popup_type_addpic');
const editForm = document.querySelector('.popup__container');
const addForm = document.querySelector('.popup__container_type_addpic');
const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const addCard = document.querySelector('.popup_type_addpic');
const createPic = document.querySelector('.popup__submit_type_addpic');
const closeAddButton = document.querySelector('.popup__close-btn_type_addpic');
const closeButton = document.querySelector('.popup__close-btn');
const popupImage = imagePopup.querySelector('.popup__image');
const popupImageTitle = imagePopup.querySelector('.popup__image-title');
const closeImageButton = imagePopup.querySelector('.popup__close-btn');
const nameInput = document.querySelector('.popup__name-input');
const aboutInput = document.querySelector('.popup__about-input');
const titleInput = document.querySelector('.popup__name-input_type_addpic');
const linkInput = document.querySelector('.popup__about-input_type_addpic');
const headerName = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__explorer');
const picturesTemplate = document.querySelector('.card-template').content.querySelector('.picture');
const list = document.querySelector('.pictures__list');

function togglePopupWindow(modal) {
    modal.classList.toggle('popup_opened');
}

initialCards.forEach(data => {
    const cardElement = picturesTemplate.cloneNode(true);

    const trashButton = cardElement.querySelector('.pictures__trash');
    const linkImage = cardElement.querySelector('.pictures__image');
    const titleName = cardElement.querySelector('.pictures__title');
    const likeButton = cardElement.querySelector('.pictures__like');

    linkImage.src = data.src;
    titleName.textContent = data.text;
    trashButton.addEventListener('click', deleteCard);
    likeButton.addEventListener('click', toggleButton);
    linkImage.addEventListener('click', () => {
        popupImage.src = data.src;
        popupImageTitle.textContent = data.text;

        togglePopupWindow(imagePopup);
    })

    list.prepend(cardElement);
});

function addNewCard(event) {
    event.preventDefault();

    const cardElement = picturesTemplate.cloneNode(true);

    const trashButton = cardElement.querySelector('.pictures__trash');
    const linkImage = cardElement.querySelector('.pictures__image');
    const titleName = cardElement.querySelector('.pictures__title');
    const likeButton = cardElement.querySelector('.pictures__like');

    linkImage.src = linkInput.value;
    titleName.textContent = titleInput.value;

    trashButton.addEventListener('click', deleteCard);
    likeButton.addEventListener('click', toggleButton);

    linkImage.addEventListener('click', () => {
        popupImage.src = linkImage.src;
        popupImageTitle.textContent = titleName.textContent;

        togglePopupWindow(imagePopup);
    })

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