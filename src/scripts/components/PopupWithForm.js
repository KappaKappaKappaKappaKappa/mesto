import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, submitFunction){
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.pop-up__form');
        this._inputList = this._form.querySelectorAll('.pop-up__form-input');
    }

    getInputValues(){
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value; 
        })
        return this._values;
    }

    setInputValues(dataUser){
        this._inputList.forEach(input => {
            input.value = dataUser[input.name]
        })
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFunction)
    }

    close(){
        super.close();
        this._form.reset();
    }
}