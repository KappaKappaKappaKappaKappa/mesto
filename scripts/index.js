let popUp = document.querySelector('.pop-up')
let editButton = document.querySelector('.profile-info__edit-button')
let closeButton = document.querySelector('.pop-up__form-button-close')

let popUpName = document.querySelector('.pop-up__form-input_input_name')
let popUpProfession = document.querySelector('.pop-up__form-input_input_profession')
let profileName = document.querySelector('.profile-info__name')
let profileProfession = document.querySelector('.profile-info__profession')

let saveButton = document.querySelector('.pop-up__form-button-save')

let popUpForm = document.querySelector('.pop-up__form')

let likeBtn = document.querySelectorAll('.card__like')

function openPopUp() {
    popUpName.value = profileName.textContent;
    popUpProfession.value = profileProfession.textContent;
    popUp.classList.add('pop-up_opened')
}

editButton.addEventListener('click', openPopUp)

function closePopUp() {
    popUp.classList.remove('pop-up_opened')
}

closeButton.addEventListener('click', closePopUp)

function savePopUp(event) {
    event.preventDefault();
    profileName.textContent = popUpName.value;
    profileProfession.textContent = popUpProfession.value;
    closePopUp()
}

popUpForm.addEventListener('submit', savePopUp)

const addCardsBtn = document.querySelector('.profile__add-button');
const popUpAddCards = document.querySelector('.pop-up__add-cards');
const closeBtnPopUpAddCards = popUpAddCards.querySelector('.pop-up__form-button-close')

function openCardsAddPopup(){
    popUpAddCards.classList.add('pop-up__add-cards_opened');
}

function closeCardsAddPopup(){
    popUpAddCards.classList.remove('pop-up__add-cards_opened');
}

addCardsBtn.addEventListener('click', openCardsAddPopup);

closeBtnPopUpAddCards.addEventListener('click', closeCardsAddPopup);






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
  const cardTemplate = `<li class="cards__list-card">
                          <article class="card">
                            <img class="card__image" src="${card.link}" alt="${card.name}">
                            <div class="card__info">
                              <h2 class="card__place">${card.name}</h2>
                              <button class="card__like" type="button"></button>
                            </div>
                          </article>
                        </li>`;
  cardsList.insertAdjacentHTML('beforeend', cardTemplate);
});



// likeBtn.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//       btn.classList.toggle('card__like_active');
//     });
//   });
