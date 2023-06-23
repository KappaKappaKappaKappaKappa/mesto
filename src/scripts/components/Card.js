export class Card {
    constructor(cardData, cardTemplate, handleOpenImage, openDeletePopup, changeLike) {
        this._cardTemplate = cardTemplate;
        this._handleOpenImage = handleOpenImage;
        this._openDeletePopup = openDeletePopup;

        this._cardData = cardData;
        this._link = this._cardData.link;
        this._name = this._cardData.name;
        this._myId = this._cardData.myid;
        this._ownerId = this._cardData.owner._id;
        this._likes = this._cardData.likes;
        this._likeLength = this._cardData.likes.length;
        this._changeLike = changeLike;
        this._cardId = cardData._id;

        this._cardElement = this._cardTemplate.content.querySelector('.cards__list-card').cloneNode(true);
        this._cardLikeNumbers = this._cardElement.querySelector('.card__like-numbers');
        this._cardImage = this._cardElement.querySelector('.card__image');
        this._cardPlace = this._cardElement.querySelector('.card__place');
        this._cardDelBtn = this._cardElement.querySelector('.card__trash');
        this._cardLikeBtn = this._cardElement.querySelector('.card__like');
    }

    _cardDelete() {
        this._openDeletePopup({ card: this, cardId: this._cardId });
    }

    _cardLike() {
        this._changeLike(this._cardLikeBtn, this._cardId);
    }

    toggleLike(likes) {
        this._cardLikeBtn.classList.toggle('card__like_active');
        this._cardLikeNumbers.textContent = likes.length;
    }

    _checkLikeStatus() {
        this._likes.forEach((item) => {
            if (item._id === this._myId) {
                this._cardLikeBtn.classList.toggle('card__like_active');
                return;
            }
        })
        this._cardLikeNumbers.textContent = this._likeLength;
    }

    _changeVisibleForTrashBtn() {
        if (this._myId === this._ownerId) {
            this._cardDelBtn.style.display = 'block';
        } else {
            this._cardDelBtn.style.display = 'none';
        }
    }

    _setEventListeners() {
        this._cardDelBtn.addEventListener('click', this._cardDelete.bind(this));
        this._cardLikeBtn.addEventListener('click', () => {
            this._cardLike();
        });
        this._cardImage.addEventListener('click', () => {
            this._handleOpenImage(this._cardData)
        })
    }

    createCardElement() {
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardPlace.textContent = this._name;
        this._checkLikeStatus();
        this._changeVisibleForTrashBtn();
        this._setEventListeners();
        return this._cardElement;
    }

    removeCard() {
        this._cardElement.remove();
    }
}