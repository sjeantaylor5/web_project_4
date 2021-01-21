const popup = document.querySelector('.popup');
const addpic = document.querySelector('.popup_type_addpic');
const editForm = document.querySelector('.popup__container');
const editButton = document.querySelector('.profile__edit-btn');
const addButton = document.querySelector('.profile__add-btn');
const closeAddButton = document.querySelector('.popup__close-btn_type_addpic');
const closeButton = document.querySelector('.popup__close-btn');
const nameInput = document.querySelector('.popup__name-input');
const aboutInput = document.querySelector('.popup__about-input');
const headerName = document.querySelector('.profile__title');
const aboutMe = document.querySelector('.profile__explorer');

function openPopup() {
    nameInput.value = headerName.innerText;
    aboutInput.value = aboutMe.innerText;
    popup.classList.add('popup_opened');
}

function openAddpic() {
    addpic.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function closeAddpic() {
    addpic.classList.remove('popup_opened');
}

function submitInput(event) {
    event.preventDefault();
    headerName.innerText = nameInput.value;
    aboutMe.innerText = aboutInput.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
editForm.addEventListener('submit', submitInput);
addButton.addEventListener('click', openAddpic);
closeAddButton.addEventListener('click', closeAddpic);