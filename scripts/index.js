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

//переделал полностью код, выглядит намного лучше



// const formElement = document.querySelector('.pop-up__form');
// const formInput = formElement.querySelector('.pop-up__form-input');
// const formError = formElement.querySelector(`.pop-up__form-${formInput.id}-error`);
// const popUpEditSaveButton = formElement.querySelector('.pop-up__form-button-save');

// function enableValidation(){
//     const formList = Array.from(document.querySelectorAll('.pop-up__form'));
//     formList.forEach((formElement) => {
//         setEventListeners(formElement);
//     });
// };

// function setEventListeners(formElement){
//     const inputList = Array.from(formElement.querySelectorAll('.pop-up__form-input'));
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             checkValid(formElement, inputElement);
//             toggleButtonState(inputList, popUpEditSaveButton);
//         });
//     });
// };

// function showFormInputError(formElement, inputElement, errorMessage){
//     const errorElement = formElement.querySelector(`.pop-up__form-${inputElement.id}-error`);
//     inputElement.classList.add('pop-up__form-input_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('pop-up__form-input-error_active');
// }

// function hideFormInputError(formElement, inputElement){
//     const errorElement = formElement.querySelector(`.pop-up__form-${inputElement.id}-error`);
//     inputElement.classList.remove('pop-up__form-input_type_error');
//     errorElement.classList.remove('pop-up__form-input-error_active');
//     errorElement.textContent = '';
// }

// function checkValid(formElement, inputElement){
//     if(!inputElement.validity.valid){
//         showFormInputError(formElement, inputElement, inputElement.validationMessage);
//     }else{
//         hideFormInputError(formElement, inputElement)
//     }
// }

// function hasInvalidInput(inputList){
// return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
// })
// }

// function toggleButtonState(inputList, buttonElement){
//     if(hasInvalidInput(inputList)){
//         buttonElement.classList.add('pop-up__form-button-save_inactive');
//         buttonElement.disabled = true;
//     }else{
//         buttonElement.classList.remove('pop-up__form-button-save_inactive');
//         buttonElement.disabled = false;
//     }
// }


// enableValidation();

// function showInputError(formElement, inputElement, errorMessage) {
//     const errorElement = formElement.querySelector(`.pop-up__form-${inputElement.id}-error`);
//     inputElement.classList.add('pop-up__form-input_type_error');
//     errorElement.classList.add('pop-up__form-input-error_active');
//     errorElement.textContent = errorMessage;
// }

// function hideInputError(formElement, inputElement) {
//     const errorElement = formElement.querySelector(`.pop-up__form-${inputElement.id}-error`);
//     inputElement.classList.remove('pop-up__form-input_type_error');
//     errorElement.classList.remove('pop-up__form-input-error_active');
//     errorElement.textContent = '';
// }

// function checkValid(formElement, inputElement) {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//         hideInputError(formElement, inputElement);
//     }
// }

// function setEventListeners(formElement) {
//     const inputList = Array.from(formElement.querySelectorAll('.pop-up__form-input'));
//     const buttonElement = formElement.querySelector('.pop-up__form-button-save');
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             checkValid(formElement, inputElement);
//             toggleButtonState(inputList, buttonElement);
//         });
//     });
// }

// function hasInvalidInput(inputList) {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// }

// function toggleButtonState(inputList, buttonElement) {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add('pop-up__form-button-save_inactive');
//     } else {
//         buttonElement.classList.remove('pop-up__form-button-save_inactive');
//     }
// }

// const enableValidation = () => {
//     const formList = Array.from(document.querySelectorAll('.pop-up__form'));
//     formList.forEach((formElement) => {
//         setEventListeners(formElement);
//     });
// };

// enableValidation();

// function enableValidation({
//     formSelector: '.pop-up__form',
//     inputSelector: '.pop-up__form-input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }){

//   }

const formEl = document.querySelector('.pop-up__form');
const inputEl = formEl.querySelector('.pop-up__form-input');
const errorEl = formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
const allInputEl = formEl.querySelectorAll('.pop-up__form-input');


function checkValid(inputEl){
    if(!inputEl.validity.valid){
        showInputError(inputEl);
    }
}

function showInputError(inputEl, errorEl){
        inputEl.classList.add('pop-up__form-input_type_error');
        errorEl.classList.add('pop-up__form-input-error_active');
    }

function hideInputError(inputEl, errorEl){
    inputEl.classList.remove('pop-up__form-input_type_error');
        errorEl.classList.remove('pop-up__form-input-error_active');
}
// 1.поставить на каждый инпут стушатель