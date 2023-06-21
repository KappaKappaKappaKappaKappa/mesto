export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._popupButtonClose = this._popup.querySelector('.pop-up__button-close');
        this._form = this._popup.querySelector('.pop-up__form');
    }

    _handleCloseEscPopup = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleButtonClose = () => {
        this.close();
    }

    _handleClickOverlay = (evt) => {
        if(evt.target === evt.currentTarget){
            this.close();
        }
    }

    setEventListeners(){
        this._popupButtonClose.addEventListener('click', this._handleButtonClose);
        this._popup.addEventListener('click', this._handleClickOverlay);
    }

    open(){
        this._popup.classList.add('pop-up_opened');
        document.addEventListener('keydown', this._handleCloseEscPopup);
    }

    close(){
        this._popup.classList.remove('pop-up_opened');
        document.removeEventListener('keydown', this._handleCloseEscPopup);
    }
}