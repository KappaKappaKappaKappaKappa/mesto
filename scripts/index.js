// EDIT POPUP
const popUpEditProfile = document.querySelector('.pop-up_show_edit-profile');
const popUpEditProfileCloseButton = popUpEditProfile.querySelector('.pop-up__button-close');
const popUpEditProfileInputName = popUpEditProfile.querySelector('.pop-up__form-input_input_name');
const popUpEditProfileInputProfession = popUpEditProfile.querySelector('.pop-up__form-input_input_profession');
const popUpEditProfileForm = popUpEditProfile.querySelector('.pop-up__form');

const editButton = document.querySelector('.profile-info__edit-button');
const profileName = document.querySelector('.profile-info__name');
const profileProfession = document.querySelector('.profile-info__profession');

//ФУНКЦИЯ ОТКРЫТИЯ ДЛЯ ВСЕХ ПОП АПОВ
function openPopUp(popUpElement) {
    popUpElement.classList.add('pop-up_opened');
};

//ФУНКЦИЯ ЗАКРЫТИЯ ДЛЯ ВСЕХ ПОП АПОВ
function closePopUp(popUpElement) {
    popUpElement.classList.remove('pop-up_opened');
};

editButton.addEventListener('click', () => {
    openPopUp(popUpEditProfile);
    popUpEditProfileInputName.value = profileName.textContent;
    popUpEditProfileInputProfession.value = profileProfession.textContent;
});

popUpEditProfileCloseButton.addEventListener('click', () => {
    closePopUp(popUpEditProfile);
});

function savePopUpEditProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpEditProfileInputName.value;
    profileProfession.textContent = popUpEditProfileInputProfession.value;
    closePopUp(popUpEditProfile);
};
popUpEditProfileForm.addEventListener('submit', savePopUpEditProfile);
// EDIT POPUP

// ADD CARDS POPUP
const popUpAddCards = document.querySelector('.pop-up_show_add-cards');
const popUpAddCardsForm = popUpAddCards.querySelector('.pop-up__form')
const popUpAddCardsInputPlace = popUpAddCards.querySelector('.pop-up__form-input_input_place');
const popUpAddCardsInputLink = popUpAddCards.querySelector('.pop-up__form-input_input_link');
const popUpAddCardsCloseBtn = popUpAddCards.querySelector('.pop-up__button-close')
const addCardsBtn = document.querySelector('.profile__add-button');

const addCard = (evt) => {
    evt.preventDefault();
    const name = popUpAddCardsInputPlace.value;
    const link = popUpAddCardsInputLink.value;
    const newCard = { name: name, link: link };
    initialCards.push(newCard);
    cardsContainer.prepend(createCardElement(newCard));
    closePopUp(popUpAddCards);
}
popUpAddCardsForm.addEventListener('submit', addCard);

addCardsBtn.addEventListener('click', () => {
    openPopUp(popUpAddCards);
    popUpAddCardsInputPlace.value = '';
    popUpAddCardsInputLink.value = '';
});

popUpAddCardsCloseBtn.addEventListener('click', () => {
    closePopUp(popUpAddCards);
});
// ADD CARDS POPUP

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// CREATE CARDS
const cardTemplate = document.querySelector('.card-template');
const cardsContainer = document.querySelector('.cards__list');

const createCardElement = (card) => {
    const cardElement = cardTemplate.content.querySelector('.cards__list-card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardPlace = cardElement.querySelector('.card__place');
    const cardDelBtn = cardElement.querySelector('.card__trash');
    const cardLikeBtn = cardElement.querySelector('.card__like');

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardPlace.textContent = card.name;

    const cardDelete = () => {
        cardElement.remove();
    };
    cardDelBtn.addEventListener('click', cardDelete);

    const cardLike = () => {
        cardLikeBtn.classList.toggle('card__like_active');
    };
    cardLikeBtn.addEventListener('click', cardLike);

    cardImage.addEventListener('click', () => {
        openPopUp(zoomCardPopup);
        zoomCardPopupImg.alt = cardPlace.textContent;
        zoomCardPopupImg.src = cardImage.src;
        zoomCardPopupName.textContent = cardPlace.textContent;
    });

    return cardElement;
}

//ЗАГРУЗКА ВСЕХ КАРТОЧЕК ИЗ МАССИВА ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
initialCards.forEach((cardInfo) => {
    const element = createCardElement(cardInfo);
    cardsContainer.append(element);
});
// CREATE CARDS

// CARD ZOOM POPUP
const zoomCardPopup = document.querySelector('.pop-up_show_zoom-card');
const zoomCardPopupCloseBtn = zoomCardPopup.querySelector('.pop-up__button-close');
const zoomCardPopupName = zoomCardPopup.querySelector('.pop-up__card-name');
const zoomCardPopupImg = zoomCardPopup.querySelector('.pop-up__image');

zoomCardPopupCloseBtn.addEventListener('click', () => {
    closePopUp(zoomCardPopup);
});
// CARD ZOOM POPUP

// ВАЛИДАЦИЯ ФОРМ
const settings = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__form-input',
    buttonSelector: '.popup__form-button-save',
    inactiveButtonClass: 'pop-up__form-button-save_inactive',
    inputErrorClass: 'pop-up__form-input_type_error',
    errorClass: 'pop-up__form-input-error_active'
  }

function checkValid(formEl, inputEl, settings){
    if(!inputEl.validity.valid){
        showInputError(formEl, inputEl, inputEl.validationMessage, settings);
    }else{
        hideInputError(formEl, inputEl, settings);
    }
}

function showInputError (formEl, inputEl, errorMessage, settings){
    const errorEl = formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
    inputEl.classList.add(settings.inputErrorClass);
    errorEl.classList.add(settings.errorClass);
    errorEl.textContent = errorMessage;
}

function hideInputError(formEl, inputEl, settings){
    const errorEl = formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
    inputEl.classList.remove(settings.inputErrorClass);
    errorEl.classList.remove(settings.errorClass);
    errorEl.textContent = '';
}

function setEventListeners(formEl, settings){
    const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    const buttonEl = formEl.querySelector(settings.buttonSelector);

    inactiveBtnSave(inputList, buttonEl, settings);
    inputList.forEach((inputEl) => {
        inputEl.addEventListener('input', function(){
            checkValid(formEl, inputEl, settings);
            inactiveBtnSave(inputList, buttonEl, settings);
        });
    });
}

  function enableValidation(settings){
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach((formEl) =>{
        formEl.addEventListener('submit', (evt)=>{
            evt.preventDefault();
        });
        setEventListeners(formEl, settings);
    });
}


function hasInvalidInput(inputList){
   return inputList.some((inputEl) =>{
        if(!inputEl.validity.valid){
            return true;
        }else{
            return false;
        }
    })
}

function inactiveBtnSave(inputList, buttonEl, settings){
    if(hasInvalidInput(inputList)){
        buttonEl.classList.add(settings.inactiveButtonClass);
    }else{
        buttonEl.classList.remove(settings.inactiveButtonClass);
    }
}

enableValidation(settings);
// ВАЛИДАЦИЯ ФОРМ
