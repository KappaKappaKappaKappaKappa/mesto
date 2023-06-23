import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidation.js';
import {
    settings,
    editButton,
    addCardsBtn,
    editProfilePopupSelector,
    addCardPopupSelector,
    popupZoomImageSelector,
    containerCardsSelector,
    userInfoConfig,
    cardTemplate,
    popUpEditProfileForm,
    popUpAddCardsForm,
    popupConfirmForm,
    popupEditAvatarForm,
    popupAvatarSelector,
    profileAvatar,
    profileAvatarBtn,
    popupDeleteSelector
} from '../scripts/utils/constans.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import '../pages/index.css';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import Api from '../scripts/components/Api.js';

//Создание класса UserInfo
const userInfo = new UserInfo(userInfoConfig);

//Создание класса PopupWithImage для попапа с зумом картинок
const popupImage = new PopupWithImage(popupZoomImageSelector);
popupImage.setEventListeners();

//Создание класса PopupWithForm для попапа изменения данных профиля
const popupEditProfile = new PopupWithForm(editProfilePopupSelector, data => {
    api.setUserInfo(data)
        .then(res => {
            userInfo.setUserInfo({ username: res.name, profession: res.about, avatar: res.avatar });
            popupEditProfile.close();
        })
        .catch((error => console.error(`Ошибка редактирования профиля${error}`)))
        .finally(() => popupEditAvatar.setupDefaultText())
})
popupEditProfile.setEventListeners();

//Создание класса PopupWithForm для попапа добавления новых карточек
const addCardPopup = new PopupWithForm(addCardPopupSelector, (data) => {
    Promise.all([api.getInfo(), api.addCard(data)])
        .then(([dataUser, dataCard]) => {
            dataCard.myid = dataUser._id;
            section.addItemPrepend(createNewCard(dataCard))
            addCardPopup.close();
        })
        .catch((error) => console.error(`Ошибка при добавлении новой карточки ${error}`))
        .finally(() => popupEditAvatar.setupDefaultText());
})
addCardPopup.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, data => {
    api.setNewAvatar(data)
        .then(res => {
            userInfo.setUserInfo({ username: res.name, profession: res.about, avatar: res.avatar })
            popupEditAvatar.close()
        })
        .catch((error) => console.error(`Ошибка при обновлении аватара ${error}`))
        .finally(() => popupEditAvatar.setupDefaultText())
})
popupEditAvatar.setEventListeners();

//Создание класса Popup для попапа изменения данных профиля
const profilePopup = new Popup(editProfilePopupSelector);
profilePopup.setEventListeners();

const popupDeleteCard = new PopupDeleteCard(popupDeleteSelector, ({ card, cardId }) => {
    api.deleteCard(cardId)
        .then(() => {
            card.removeCard()
            popupDeleteCard.close()
        })
        .catch((error) => console.error(`Ошибка при удалении каточки ${error}`))
        .finally(() => popupDeleteCard.setupDefaultText())
})
popupDeleteCard.setEventListeners();

function createNewCard(element) {
    const cardInstance = new Card(element, cardTemplate, popupImage.open, popupDeleteCard.open, (likeElement, cardId) => {
        if (likeElement.classList.contains('card__like_active')) {
            api.deleteLike(cardId)
                .then(res => {
                    cardInstance.toggleLike(res.likes);
                })
                .catch(error => console.error(`Ошибка при удалении лайка ${error}`))
        } else {
            api.addLike(cardId)
                .then(res => {
                    cardInstance.toggleLike(res.likes);
                })
                .catch(error => console.error(`Ошибка при добавлении лайка ${error}`))
        }
    });
    return cardInstance.createCardElement();
}

//Создание класса Section
const section = new Section((element) => {
    section.addItemPrepend(createNewCard(element))
}, containerCardsSelector);

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

const formConfirmDeleteValidator = new FormValidator(settings, popupConfirmForm);
formConfirmDeleteValidator.enableValidation();

const formEditAvatar = new FormValidator(settings, popupEditAvatarForm);
formEditAvatar.enableValidation();

profileAvatarBtn.addEventListener('click', () => {
    formEditAvatar.clearInputErrors();
    popupEditAvatar.open();
})

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
        authorization: 'a069766e-f2cf-4169-8365-de2d06b0c981',
        'Content-Type': 'application/json'
    }
})

Promise.all([api.getInfo(), api.getCards()])
    .then(([dataUser, dataCards]) => {
        dataCards.forEach(card => card.myid = dataUser._id);
        userInfo.setUserInfo({ username: dataUser.name, profession: dataUser.about, avatar: dataUser.avatar });
        section.addCardFromArr(dataCards.reverse());
    })
    .catch((error) => console.error(`Ошибка при начальной загрузке данных страницы${error}`))