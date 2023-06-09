import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidation.js';
import {     settings,
    editButton,
    addCardsBtn,
    editProfilePopupSelector,
    addCardPopupSelector,
    popupZoomImageSelector,
    containerCardsSelector,
    userInfoConfig,
    cardTemplate,
    popUpEditProfileForm,
    popUpAddCardsForm } from '../scripts/utils/constans.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import { initialCards } from '../scripts/utils/initial-сards.js';
import '../pages/index.css';

//Создание класса UserInfo
const userInfo = new UserInfo(userInfoConfig);

//Создание класса PopupWithImage для попапа с зумом картинок
const popupImage = new PopupWithImage(popupZoomImageSelector);
popupImage.setEventListeners();

//Создание класса PopupWithForm для попапа изменения данных профиля
const popupEditProfile = new PopupWithForm(editProfilePopupSelector, inputValues => {
    userInfo.setUserInfo(inputValues);
})
popupEditProfile.setEventListeners();

//Создание класса PopupWithForm для попапа добавления новых карточек
const addCardPopup = new PopupWithForm(addCardPopupSelector, (inputValues) => {
    section.addItem(section.renderer(inputValues));
})
addCardPopup.setEventListeners();

//Создание класса Popup для попапа изменения данных профиля
const profilePopup = new Popup(editProfilePopupSelector);
profilePopup.setEventListeners();

//Создание класса Section
const section = new Section({
    items : initialCards,
    renderer : (element) =>{
        const cardInstance = new Card(element, cardTemplate, popupImage.open);
        return cardInstance.createCardElement();
    }
}, containerCardsSelector);
section.addCardFromArr();

//Вешаем обработчики на кнопку открытия попапа изменения пользовательских данных
editButton.addEventListener('click', () => {
    formEditProfileValidator.clearInputErrors();
    popupEditProfile.setInputValues(userInfo.getUserInfo());
    profilePopup.open();
});

//Вешаем обработчики на кнопку открытия попапа с добавлением новых карточек
addCardsBtn.addEventListener('click', () => {
    addCardPopup.open();
    formAddCardsValidator.clearInputErrors();
});

//Подключаем валидацию на формы
const formEditProfileValidator = new FormValidator(settings, popUpEditProfileForm);
formEditProfileValidator.enableValidation();

const formAddCardsValidator = new FormValidator(settings, popUpAddCardsForm);
formAddCardsValidator.enableValidation();