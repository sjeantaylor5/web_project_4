let popup = document.getElementById('editProfile');
let editButton = document.querySelector('.profile__edit-btn');
let submitButton = document.querySelector('.popup__submit');
let closeButton = document.querySelector('.popup__close-btn');
let nameInput = document.querySelector('.popup__name-input');
let aboutInput = document.querySelector('.popup__about-input');
let headerName = document.querySelector('.profile__title');
let aboutMe = document.querySelector('.profile__explorer');
let pictureLike = document.querySelector('.pictures');

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', submitInput);
pictureLike.addEventListener('click', toggleLike);


function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function submitInput(event) {
    event.preventDefault();
    let name = nameInput.value;
    let about = aboutInput.value;
    headerName.innerText = name;
    aboutMe.innerText = about;
    nameInput.value = '';
    aboutInput.value = '';
    closePopup();
}

function toggleLike(event) {
    let element = event.target;
    if (element.alt === "Heart") {
        if (element.src.includes("like-button.svg")) {
            element.src = "./images/active-like.svg";
        } else {
            element.src = "./images/like-button.svg";
        }
    }
}