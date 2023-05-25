import { initialCards } from './initial-сards.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidation.js';
import { settings } from './constans.js';
// EDIT POPUP
const popUpEditProfile = document.querySelector('.pop-up_show_edit-profile');
const popUpEditProfileCloseButton = popUpEditProfile.querySelector('.pop-up__button-close');
const popUpEditProfileInputName = popUpEditProfile.querySelector('.pop-up__form-input_input_name');
const popUpEditProfileInputProfession = popUpEditProfile.querySelector('.pop-up__form-input_input_profession');
const popUpEditProfileForm = popUpEditProfile.querySelector('.pop-up__form');
const editButton = document.querySelector('.profile-info__edit-button');
const profileName = document.querySelector('.profile-info__name');
const profileProfession = document.querySelector('.profile-info__profession');

// ADD CARDS POPUP
const popUpAddCards = document.querySelector('.pop-up_show_add-cards');
const popUpAddCardsForm = popUpAddCards.querySelector('.pop-up__form')
const popUpAddCardsInputPlace = popUpAddCards.querySelector('.pop-up__form-input_input_place');
const popUpAddCardsInputLink = popUpAddCards.querySelector('.pop-up__form-input_input_link');
const popUpAddCardsCloseBtn = popUpAddCards.querySelector('.pop-up__button-close')
const addCardsBtn = document.querySelector('.profile__add-button');

// CREATE CARDS
const cardTemplate = document.querySelector('.card-template');
const cardsContainer = document.querySelector('.cards__list');

// CARD ZOOM POPUP
const zoomCardPopup = document.querySelector('.pop-up_show_zoom-card');
const zoomCardPopupCloseBtn = zoomCardPopup.querySelector('.pop-up__button-close');
const zoomCardPopupName = zoomCardPopup.querySelector('.pop-up__card-name');
const zoomCardPopupImg = zoomCardPopup.querySelector('.pop-up__image');

//ФУНКЦИЯ ОТКРЫТИЯ ДЛЯ ВСЕХ ПОП АПОВ
function openPopUp(popUpElement) {
    popUpElement.classList.add('pop-up_opened');
    document.addEventListener('keydown', closeEcsPopup);
};

//ФУНКЦИЯ ЗАКРЫТИЯ ДЛЯ ВСЕХ ПОП АПОВ
function closePopUp(popUpElement) {
    popUpElement.classList.remove('pop-up_opened');
    document.removeEventListener('keydown', closeEcsPopup);
};

// // ЗАКРЫТИЕ POPUP КНОПКОЙ ESC
function closeEcsPopup(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.pop-up_opened');
        closePopUp(popup);
    }
}

function savePopUpEditProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpEditProfileInputName.value;
    profileProfession.textContent = popUpEditProfileInputProfession.value;
    closePopUp(popUpEditProfile);
};

function handleOpenImage(name, link) {
    openPopUp(zoomCardPopup);
    zoomCardPopupImg.alt = name;
    zoomCardPopupImg.src = link;
    zoomCardPopupName.textContent = name;
}

const addCard = (evt) => {
    evt.preventDefault();
    const name = popUpAddCardsInputPlace.value;
    const link = popUpAddCardsInputLink.value;
    const newCard = { name: name, link: link };
    initialCards.push(newCard);
    const cardElement = createCardInstance(newCard);
    cardsContainer.prepend(cardElement);
    closePopUp(popUpAddCards);
}

function createCardInstance(cardData){
    const cardInstance = new Card(cardData, cardTemplate, handleOpenImage);
    return cardInstance.createCardElement();
}

editButton.addEventListener('click', () => {
    openPopUp(popUpEditProfile);
    popUpEditProfileInputName.value = profileName.textContent;
    popUpEditProfileInputProfession.value = profileProfession.textContent;
    formEditProfileValidator.clearInputErrors();
});

popUpEditProfileCloseButton.addEventListener('click', () => {
    closePopUp(popUpEditProfile);
});

popUpEditProfileForm.addEventListener('submit', savePopUpEditProfile);

popUpAddCardsForm.addEventListener('submit', addCard);

addCardsBtn.addEventListener('click', () => {
    openPopUp(popUpAddCards);
    popUpAddCardsForm.reset();
    formAddCardsValidator.clearInputErrors();
});

popUpAddCardsCloseBtn.addEventListener('click', () => {
    closePopUp(popUpAddCards);
});

zoomCardPopupCloseBtn.addEventListener('click', () => {
    closePopUp(zoomCardPopup);
});
// CARD ZOOM POPUP


// ЗАКРЫТИЕ POPUP КЛИКОМ НА ОВЕРЛЕЙ
const allPopUp = Array.from(document.querySelectorAll('.pop-up'));
allPopUp.forEach((popup) => {
    const popUpContainer = popup.querySelector('.pop-up__container');
    popup.addEventListener('click', function (evt) {
        if (!popUpContainer.contains(evt.target)) {
            closePopUp(popup);
        }
    });
});

//ЗАГРУЗКА ВСЕХ КАРТОЧЕК ИЗ МАССИВА ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
initialCards.forEach((cardInfo) => {
    const element = createCardInstance(cardInfo);
    cardsContainer.append(element);
});

const formEditProfileValidator = new FormValidator(settings, popUpEditProfileForm);
formEditProfileValidator.enableValidation();

const formAddCardsValidator = new FormValidator(settings, popUpAddCardsForm);
formAddCardsValidator.enableValidation();