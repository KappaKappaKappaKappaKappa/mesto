// ВАЛИДАЦИЯ ФОРМ
export const settings = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__form-input',
    buttonSelector: '.pop-up__form-button-save',
    inactiveButtonClass: 'pop-up__form-button-save_inactive',
    inputErrorClass: 'pop-up__form-input_type_error'
}

export class FormValidator{
    constructor(settings, formEl){
        this._settings = settings;
        this._formEl = formEl;
    }

    _checkValid(formEl, inputEl) {
        if (!inputEl.validity.valid) {
            this._showInputError(formEl, inputEl, inputEl.validationMessage);
        } else {
            this._hideInputError(formEl, inputEl);
        }
    }

    _showInputError(formEl, inputEl, errorMessage) {
        const errorEl = formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
        inputEl.classList.add(this._settings.inputErrorClass);
        errorEl.textContent = errorMessage;
    }

    _hideInputError(formEl, inputEl) {
        const errorEl = formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
        inputEl.classList.remove(this._settings.inputErrorClass);
        errorEl.textContent = '';
    }

    _setEventListeners(formEl) {
        const inputList = Array.from(formEl.querySelectorAll(this._settings.inputSelector));
        const buttonEl = formEl.querySelector(this._settings.buttonSelector);
    
        this._inactiveBtnSave(inputList, buttonEl);
        inputList.forEach((inputEl) => {
            inputEl.addEventListener('input', () => {
                this._checkValid(formEl, inputEl);
                this._inactiveBtnSave(inputList, buttonEl);
            });
        });
    }

    _getDisableBtnSave(buttonEl){
        buttonEl.classList.add(this._settings.inactiveButtonClass);
        buttonEl.setAttribute('disabled', '');
    }

    _removeDisableBtnSave(buttonEl){
        buttonEl.classList.remove(this._settings.inactiveButtonClass);
        buttonEl.removeAttribute('disabled');
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputEl) => {
            if (!inputEl.validity.valid) {
                return true;
            } else {
                return false;
            }
        })
    }

    _inactiveBtnSave(inputList, buttonEl) {
        if (this._hasInvalidInput(inputList)) {
            this._getDisableBtnSave(buttonEl);
        } else {
            this._removeDisableBtnSave(buttonEl);
        }
    }

    enableValidation(){
const formList = Array.from(document.querySelectorAll(this._settings.formSelector));

    formList.forEach((formEl) => {
        formEl.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const buttonEl = formEl.querySelector(this._settings.buttonSelector);
            this._getDisableBtnSave(buttonEl, this._settings);
        });
        this._setEventListeners(formEl);
    });
    }
}
