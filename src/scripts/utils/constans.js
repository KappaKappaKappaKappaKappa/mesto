const settings = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__form-input',
    buttonSelector: '.pop-up__form-button-save',
    inactiveButtonClass: 'pop-up__form-button-save_inactive',
    inputErrorClass: 'pop-up__form-input_type_error',

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
const popUpAddCardsForm = popUpAddCards.querySelector('.pop-up__form');
const userInfoConfig = {
    profileNameSelector: '.profile-info__name',
    profileProfessionSelector: '.profile-info__profession',
    profileAvatar : '.profile__avatar'
};
const popupConfirm = document.querySelector('.pop-up_show_delete-submit');
const popupConfirmForm = popupConfirm.querySelector('.pop-up__form');
const popupEditAvatar = document.querySelector('.pop-up_show_new-avatar-form');
const popupEditAvatarForm = popupEditAvatar.querySelector('.pop-up__form');
const popupAvatarSelector = '.pop-up_show_new-avatar-form';
const profileAvatar = document.querySelector('.profile__avatar');
const profileAvatarBtn = document.querySelector('.profile__avatar-btn');
const popupDeleteSelector = '.pop-up_show_delete-submit';

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
    popUpAddCardsForm,
    popupConfirmForm,
    popupEditAvatarForm,
    popupAvatarSelector,
    profileAvatar,
    profileAvatarBtn,
    popupDeleteSelector
}