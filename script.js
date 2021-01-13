let popup = document.getElementById('editProfile');
let editButton = document.querySelector('.profile__info_edit-btn');
let submitButton = document.querySelector('.popup__container_submit');
let closeButton = document.querySelector('.popup__container_close-btn');
let nameInput = document.querySelector('.popup__container_field-one');
let aboutInput = document.querySelector('.popup__container_field-two');
let headerName = document.querySelector('.profile__info_name-title');
let aboutMe = document.querySelector('.profile__info_explorer');
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