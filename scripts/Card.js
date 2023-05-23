export class Card{
    constructor(initialCards, cardTemplate){
        this._initialCards = initialCards;
        this._cardTemplate = cardTemplate;
    }

    createCardElement(card){
    this._cardElement = this._cardTemplate.content.querySelector('.cards__list-card').cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardPlace = this._cardElement.querySelector('.card__place');
    this._cardDelBtn = this._cardElement.querySelector('.card__trash');
    this._cardLikeBtn = this._cardElement.querySelector('.card__like');

    this._cardImage.src = card.link;
    this._cardImage.alt = card.name;
    this._cardPlace.textContent = card.name;
    return this._cardElement;
    }

    _cardDelete(){
        this._cardElement.remove();
    }

    _cardLike(){
        this._cardLikeBtn.classList.toggle('card__like_active');
    }

    _setEventListeners(){
        this._cardDelBtn.addEventListener('click', this._cardDelete.bind(this));
        this._cardLikeBtn.addEventListener('click', this._cardLike.bind(this));
        this._cardImage.addEventListener('click', () => {
            openPopUp(zoomCardPopup);
            zoomCardPopupImg.alt = this._cardPlace.textContent;
            zoomCardPopupImg.src = this._cardImage.src;
            zoomCardPopupName.textContent = this._cardPlace.textContent;
        })
    }
}