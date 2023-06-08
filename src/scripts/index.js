import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidation.js';
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
    popUpAddCardsForm } from './utils/constans.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import { initialCards } from './utils/initial-сards.js';
import '../pages/index.css';

//Создание класса UserInfo
const userInfo = new UserInfo(userInfoConfig);

//Создание класса PopupWithImage для попапа с зумом картинок
const popupImage = new PopupWithImage(popupZoomImageSelector);
popupImage.setEventListeners();

//Создание класса PopupWithForm для попапа изменения данных профиля
const popupEditProfile = new PopupWithForm(editProfilePopupSelector, (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(popupEditProfile.getInputValues()); 
    popupEditProfile.close();
})
popupEditProfile.setEventListeners();

//Создание класса PopupWithForm для попапа добавления новых карточек
const addCardPopup = new PopupWithForm(addCardPopupSelector, (evt) => {
    evt.preventDefault();
    section.addItem(section.renderer(addCardPopup.getInputValues()));
    addCardPopup.close();
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