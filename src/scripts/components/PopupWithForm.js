import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.pop-up__form');
        this._inputList = this._form.querySelectorAll('.pop-up__form-input');
        this._saveBtn = this._form.querySelector('.pop-up__form-button-save');
        this._saveBtnDefaultText = this._saveBtn.textContent;
    }

    _getInputValues() {
        const values = {};
        this._inputList.forEach(input => {
            values[input.name] = input.value;
        })
        return values;
    }

    _renderLoading(){
        this._saveBtn.textContent = `${this._saveBtn.textContent}...`
    }

    setInputValues(dataUser) {
        this._inputList.forEach(input => {
            input.value = dataUser[input.name]
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._renderLoading()
            this._submitFunction(this._getInputValues());
        })
    }

    setupDefaultText(){
        this._saveBtn.textContent = this._saveBtnDefaultText;
    }

    close() {
        super.close();
        this._form.reset();
    }
}