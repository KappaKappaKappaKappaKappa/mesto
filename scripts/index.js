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

function clearInputErrors(popUpElement){
    const inputList = Array.from(popUpElement.querySelectorAll('.pop-up__form-input'));
    inputList.forEach((inputEl) => {
        const errorEl = popUpElement.querySelector(`.pop-up__form-${inputEl.id}-error`);
        inputEl.classList.remove('pop-up__form-input_type_error');
        errorEl.textContent = '';
    })
}

//ФУНКЦИЯ ОТКРЫТИЯ ДЛЯ ВСЕХ ПОП АПОВ
function openPopUp(popUpElement) {
    popUpElement.classList.add('pop-up_opened');
    document.addEventListener('keydown', closeEcsPopup);
    clearInputErrors(popUpElement);
};

//ФУНКЦИЯ ЗАКРЫТИЯ ДЛЯ ВСЕХ ПОП АПОВ
function closePopUp(popUpElement) {
    popUpElement.classList.remove('pop-up_opened');
    document.removeEventListener('keydown', closeEcsPopup);
};

// // ЗАКРЫТИЕ POPUP КНОПКОЙ ESC
function closeEcsPopup(evt){
    if(evt.key === 'Escape'){
        const popup = document.querySelector('.pop-up_opened');
        closePopUp(popup);
    }
}

// ADD CARDS POPUP
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

function savePopUpEditProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpEditProfileInputName.value;
    profileProfession.textContent = popUpEditProfileInputProfession.value;
    closePopUp(popUpEditProfile);
};

const addCard = (evt) => {
    evt.preventDefault();
    const name = popUpAddCardsInputPlace.value;
    const link = popUpAddCardsInputLink.value;
    const newCard = { name: name, link: link };
    initialCards.push(newCard);
    cardsContainer.prepend(createCardElement(newCard));
    closePopUp(popUpAddCards);
}

editButton.addEventListener('click', () => {
    openPopUp(popUpEditProfile);
    popUpEditProfileInputName.value = profileName.textContent;
    popUpEditProfileInputProfession.value = profileProfession.textContent;

});

popUpEditProfileCloseButton.addEventListener('click', () => {
    closePopUp(popUpEditProfile);
});

popUpEditProfileForm.addEventListener('submit', savePopUpEditProfile);

popUpAddCardsForm.addEventListener('submit', addCard);

addCardsBtn.addEventListener('click', () => {
    openPopUp(popUpAddCards);
    popUpAddCardsInputPlace.value = '';
    popUpAddCardsInputLink.value = '';

});

popUpAddCardsCloseBtn.addEventListener('click', () => {
    closePopUp(popUpAddCards);
});

//ЗАГРУЗКА ВСЕХ КАРТОЧЕК ИЗ МАССИВА ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
initialCards.forEach((cardInfo) => {
    const element = createCardElement(cardInfo);
    cardsContainer.append(element);
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



