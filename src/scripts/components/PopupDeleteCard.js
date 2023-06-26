import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.pop-up__form');
        this._saveBtn = this._form.querySelector('.pop-up__form-button-save');
        this._saveBtnDefaultText = this._saveBtn.textContent;
    }

    _renderLoading(){
        this._saveBtn.textContent = `${this._saveBtn.textContent}...`
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._renderLoading();
            this._submitFunction({ card: this._element, cardId: this._cardId })
        })
    }

    setupDefaultText(){
        this._saveBtn.textContent = this._saveBtnDefaultText;
    }

    open = ({ card, cardId }) => {
        super.open();
        this._element = card;
        this._cardId = cardId;
    }

    close() {
        super.close();
    }

}