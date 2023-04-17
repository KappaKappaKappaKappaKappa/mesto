// EDIT POPUP
const popUpEditProfile = document.querySelector('.pop-up_show_edit-profile')
const popUpEditProfileCloseButton = popUpEditProfile.querySelector('.pop-up__button-close')
const popUpEditProfileInputName = popUpEditProfile.querySelector('.pop-up__form-input_input_name')
const popUpEditProfileInputProfession = popUpEditProfile.querySelector('.pop-up__form-input_input_profession')
const popUpEditProfileForm = popUpEditProfile.querySelector('.pop-up__form')

const editButton = document.querySelector('.profile-info__edit-button')
const profileName = document.querySelector('.profile-info__name')
const profileProfession = document.querySelector('.profile-info__profession')

function openPopUpEditProfile() {
    popUpEditProfileInputName.value = profileName.textContent;
    popUpEditProfileInputProfession.value = profileProfession.textContent;
    popUpEditProfile.classList.add('pop-up_opened');
}
editButton.addEventListener('click', openPopUpEditProfile)

function closePopUpEditProfile() {
    popUpEditProfile.classList.remove('pop-up_opened')
}
popUpEditProfileCloseButton.addEventListener('click', closePopUpEditProfile);

function savePopUpEditProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpEditProfileInputName.value;
    profileProfession.textContent = popUpEditProfileInputProfession.value;
    closePopUpEditProfile();
}
popUpEditProfileForm.addEventListener('submit', savePopUpEditProfile)
// EDIT POPUP

// ADD CARDS POPUP
const popUpAddCards = document.querySelector('.pop-up_show_add-cards');
const popUpAddCardsForm = popUpAddCards.querySelector('.pop-up__form')
const popUpAddCardsInputPlace = popUpAddCards.querySelector('.pop-up__form-input_input_place');
const popUpAddCardsInputLink = popUpAddCards.querySelector('.pop-up__form-input_input_link');
const popUpAddCardsCloseBtn = popUpAddCards.querySelector('.pop-up__button-close')
const addCardsBtn = document.querySelector('.profile__add-button');

function openPopUpAddCards() {
    popUpAddCards.classList.add('pop-up_opened');
    popUpAddCardsInputPlace.value = '';
    popUpAddCardsInputLink.value = '';
}

function closePopUpAddCards() {
    popUpAddCards.classList.remove('pop-up_opened');
}

const addCard = (evt) => {
    evt.preventDefault();
    const name = popUpAddCardsInputPlace.value;
    const link = popUpAddCardsInputLink.value;
    const newCard = { name: name, link: link };
    initialCards.push(newCard);
    cardContainer.prepend(createCardElement(newCard));
    closePopUpAddCards();
}
popUpAddCardsForm.addEventListener('submit', addCard);

addCardsBtn.addEventListener('click', openPopUpAddCards);
popUpAddCardsCloseBtn.addEventListener('click', closePopUpAddCards);
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
    }

    const cardLike = () => {
        cardLikeBtn.classList.toggle('card__like_active');
    }

    const zoomCard = () => {
        zoomCardPopupImg.alt = cardPlace.textContent;
        zoomCardPopupImg.src = cardImage.src;
        zoomCardPopupName.textContent = cardPlace.textContent;
        zoomCardPopup.classList.add('pop-up_opened');
        
    }

    cardDelBtn.addEventListener('click', cardDelete);
    cardLikeBtn.addEventListener('click', cardLike);
    cardImage.addEventListener('click', zoomCard)


    return cardElement;
}

initialCards.forEach((cardInfo) => {
    const element = createCardElement(cardInfo);
    cardsContainer.prepend(element);
})
// CREATE CARDS


// CARD ZOOM POPUP
const zoomCardPopup = document.querySelector('.pop-up_show_zoom-card');
const zoomCardPopupCloseBtn = zoomCardPopup.querySelector('.pop-up__button-close');
const zoomCardPopupName = zoomCardPopup.querySelector('.pop-up__card-name');
const zoomCardPopupImg = zoomCardPopup.querySelector('.pop-up__image')

zoomCardPopupCloseBtn.addEventListener('click', () => {
    zoomCardPopup.classList.remove('pop-up_opened')
    zoomCardPopupImg.alt = '';
    zoomCardPopupImg.src = '';
    zoomCardPopupName.textContent = '';
});
// CARD ZOOM POPUP


