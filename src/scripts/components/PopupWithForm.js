import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.pop-up__form');
        this._inputList = this._form.querySelectorAll('.pop-up__form-input');
    }

    _getInputValues() {
        const values = {};
        this._inputList.forEach(input => {
            values[input.name] = input.value;
        })
        return values;
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
            this._submitFunction(this._getInputValues());
            this.close();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}