const popUpEditProfile = document.querySelector('.pop-up_show_edit-profile')
const popUpEditProfileCloseButton = popUpEditProfile.querySelector('.pop-up__button-close')
const popUpEditProfileInputName = popUpEditProfile.querySelector('.pop-up__form-input_input_name')
const popUpEditProfileInputProfession = popUpEditProfile.querySelector('.pop-up__form-input_input_profession')
const popUpEditProfileForm = popUpEditProfile.querySelector('.pop-up__form')

const editButton = document.querySelector('.profile-info__edit-button')
const profileName = document.querySelector('.profile-info__name')
const profileProfession = document.querySelector('.profile-info__profession')

function addProfileNameAndProfessionPopUpEditProfile() {
    popUpEditProfileInputName.value = profileName.textContent;
    popUpEditProfileInputProfession.value = profileProfession.textContent;
}
function openPopUpEditProfile() {
    popUpEditProfile.classList.add('pop-up_opened');
    addProfileNameAndProfessionPopUpEditProfile();
}
editButton.addEventListener('click', openPopUpEditProfile)
function closePopUpEditProfile() {
    popUpEditProfile.classList.remove('pop-up_opened')
}
popUpEditProfileCloseButton.addEventListener('click', closePopUpEditProfile)
function savePopUpEditProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpEditProfileInputName.value;
    profileProfession.textContent = popUpEditProfileInputProfession.value;
    closePopUpEditProfile()
}
popUpEditProfileForm.addEventListener('submit', savePopUpEditProfile)




const popUpAddCards = document.querySelector('.pop-up_show_add-cards');
const popUpAddCardsCloseBtn = popUpAddCards.querySelector('.pop-up__button-close')
const addCardsBtn = document.querySelector('.profile__add-button');

function openPopUpAddCards() {
    popUpAddCards.classList.add('pop-up_opened');
}

function closePopUpAddCards() {
    popUpAddCards.classList.remove('pop-up_opened');
}

addCardsBtn.addEventListener('click', openPopUpAddCards);
popUpAddCardsCloseBtn.addEventListener('click', closePopUpAddCards);


const popUpAddCardsForm = popUpAddCards.querySelector('.pop-up__form')

const popUpAddCardsInputPlace = popUpAddCards.querySelector('.pop-up__form-input_input_place');
const popUpAddCardsInputLink = popUpAddCards.querySelector('.pop-up__form-input_input_link');

const cardTemplate = document.querySelector('.card-template').content;
function addCard(event) {
    event.preventDefault();
    const name = popUpAddCardsInputPlace.value;
    const link = popUpAddCardsInputLink.value;
    initialCards.unshift({ name: name, link: link });
    const cardElement = cardTemplate.querySelector('.cards__list-card').cloneNode(true);
    cardElement.querySelector('.card__image').src = `${link}`;
    cardElement.querySelector('.card__image').alt = `${name}`;
    cardElement.querySelector('.card__place').textContent = `${name}`;
    cardsList.prepend(cardElement);
    closePopUpAddCards();
    popUpAddCardsInputPlace.value = '';
    popUpAddCardsInputLink.value = '';
}

popUpAddCardsForm.addEventListener('submit', addCard)



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
const cardsList = document.querySelector('.cards__list');

initialCards.forEach((card) => {
    const cardElement = cardTemplate.querySelector('.cards__list-card').cloneNode(true);
    cardElement.querySelector('.card__image').src = `${card.link}`;
    cardElement.querySelector('.card__image').alt = `${card.name}`;
    cardElement.querySelector('.card__place').textContent = `${card.name}`;
    cardsList.append(cardElement);
});

const likeBtns = document.querySelectorAll('.card__like')

likeBtns.forEach(function (like) {
    like.addEventListener('click', function () {
        like.classList.toggle('card__like_active');
    });
});


const delBtn = document.querySelectorAll('.card__trash');
delBtn.forEach(button => {
    button.addEventListener('click', function (event) {
        const card = event.target.closest('.cards__list-card');
        card.remove();
    })
})

const cardPopup = document.querySelector('.pop-up_show_zoom-card');
const cardPopupCloseBtn = cardPopup.querySelector('.pop-up__button-close');
const popupName = document.querySelector('.pop-up__card-name');
const popupImg = document.querySelector('.pop-up__image')

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const image = card.querySelector('.card__image');
    const title = card.querySelector('.card__place');
    image.addEventListener('click', () => {
        popupImg.alt = title.textContent;
        popupImg.src = image.src;
        popupName.textContent = title.textContent;
        cardPopup.classList.add('pop-up_opened');
    })
})

cardPopupCloseBtn.addEventListener('click', () => {
    cardPopup.classList.remove('pop-up_opened')
    popupImg.alt = '';
    popupImg.src = '';
    popupName.textContent = '';
});


