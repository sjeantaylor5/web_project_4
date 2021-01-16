let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-btn');
let submitButton = document.querySelector('.popup__submit');
let closeButton = document.querySelector('.popup__close-btn');
let nameInput = document.querySelector('.popup__name-input');
let aboutInput = document.querySelector('.popup__about-input');
let headerName = document.querySelector('.profile__title');
let aboutMe = document.querySelector('.profile__explorer');

function openPopup() {
    popup.classList.add('popup_opened');
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
submitButton.addEventListener('click', submitInput);