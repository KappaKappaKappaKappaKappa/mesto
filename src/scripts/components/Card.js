export class Card {
    constructor(cardData, cardTemplate, handleOpenImage) {
        this._cardData = cardData;
        this._cardTemplate = cardTemplate;
        this._handleOpenImage = handleOpenImage;
        this._liked = false;
        this._count = 0;
    }

    createCardElement() {
        this._cardElement = this._cardTemplate.content.querySelector('.cards__list-card').cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.card__image');
        this._cardPlace = this._cardElement.querySelector('.card__place');
        this._cardDelBtn = this._cardElement.querySelector('.card__trash');
        this._cardLikeBtn = this._cardElement.querySelector('.card__like');
        this._cardLikeNumbers = this._cardElement.querySelector('.card__like-numbers');

        this._cardImage.src = this._cardData.link;
        this._cardImage.alt = this._cardData.title;
        this._cardPlace.textContent = this._cardData.title;
        this._setEventListeners();
        return this._cardElement;
    }

    _cardDelete() {
        this._cardElement.remove();
    }

    _cardLike() {
        this._cardLikeBtn.classList.toggle('card__like_active');
    }

    _cardLikeCount(){
        if(!this._liked){
            this._count++;
            this._cardLikeNumbers.textContent = this._count;
            this._liked = true;
        }else{
            this._count--;
            this._cardLikeNumbers.textContent = this._count;
            this._liked = false;
        }
    }

    _setEventListeners() {
        this._cardDelBtn.addEventListener('click', this._cardDelete.bind(this));
        this._cardLikeBtn.addEventListener('click', () => {
            this._cardLike();
            this._cardLikeCount();
        });
        this._cardImage.addEventListener('click', () => {
            this._handleOpenImage(this._cardData)
        })
    }
}