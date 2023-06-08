import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.pop-up__image');
        this._popupImageName = this._popup.querySelector('.pop-up__card-name');
    }

    open = (cardData) => {
        this._popupImage.src = cardData.link;
        this._popupImage.alt = cardData.title;
        this._popupImageName.textContent = cardData.title;
        super.open();
    }
}