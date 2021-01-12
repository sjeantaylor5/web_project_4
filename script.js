const popup = document.getElementById('editProfile');
const editButton = document.querySelector('.profile__info_edit-btn');
const submitButton = document.querySelector('.popup__container_submit');
const closeButton = document.querySelector('.popup__container_close-btn');
const nameInput = document.querySelector('.popup__container_field-one');
const aboutInput = document.querySelector('.popup__container_field-two');
const headerName = document.querySelector('.profile__info_name-title');
const aboutMe = document.querySelector('.profile__info_explorer');
const pictureLike = document.querySelector('.pictures');

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
    const name = nameInput.value;
    const about = aboutInput.value;
    headerName.innerText = name;
    aboutMe.innerText = about;
    nameInput.value = '';
    aboutInput.value = '';
    closePopup();
}

function toggleLike(event) {
    const element = event.target;
    if (element.alt === "Heart") {
        if (element.src.includes("like-button.svg")) {
            element.src = "./images/active-like.svg";
        } else {
            element.src = "./images/like-button.svg";
        }
    }
}