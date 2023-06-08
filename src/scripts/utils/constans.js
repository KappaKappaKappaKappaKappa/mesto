const settings = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__form-input',
    buttonSelector: '.pop-up__form-button-save',
    inactiveButtonClass: 'pop-up__form-button-save_inactive',
    inputErrorClass: 'pop-up__form-input_type_error'
}

const editButton = document.querySelector('.profile-info__edit-button');
const addCardsBtn = document.querySelector('.profile__add-button');
const editProfilePopupSelector = '.pop-up_show_edit-profile';
const addCardPopupSelector = '.pop-up_show_add-cards';
const popupZoomImageSelector = '.pop-up_show_zoom-card';
const containerCardsSelector = '.cards__list';
const cardTemplate = document.querySelector('.card-template');
const popUpEditProfile = document.querySelector('.pop-up_show_edit-profile');
const popUpEditProfileForm = popUpEditProfile.querySelector('.pop-up__form');
const popUpAddCards = document.querySelector('.pop-up_show_add-cards');
const popUpAddCardsForm = popUpAddCards.querySelector('.pop-up__form')
const userInfoConfig = {
    profileNameSelector: '.profile-info__name',
    profileProfessionSelector: '.profile-info__profession'
};

export {
    settings,
    editButton,
    addCardsBtn,
    editProfilePopupSelector,
    addCardPopupSelector,
    popupZoomImageSelector,
    containerCardsSelector,
    userInfoConfig,
    cardTemplate,
    popUpEditProfile,
    popUpEditProfileForm,
    popUpAddCards,
    popUpAddCardsForm
}