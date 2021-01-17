let popup = document.querySelector('.popup');
let editForm = document.querySelector('.popup__container');
let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-btn');
let nameInput = document.querySelector('.popup__name-input');
let aboutInput = document.querySelector('.popup__about-input');
let headerName = document.querySelector('.profile__title');
let aboutMe = document.querySelector('.profile__explorer');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = headerName.innerText;
    aboutInput.value = aboutMe.innerText;
}

function closePopup() {
    popup.classList.remove('popup_opened');
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