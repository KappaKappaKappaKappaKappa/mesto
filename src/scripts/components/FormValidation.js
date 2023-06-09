// ВАЛИДАЦИЯ ФОРМ
export class FormValidator {
    constructor(settings, formEl) {
        this._settings = settings;
        this._formEl = formEl;
        this._inputList = Array.from(this._formEl.querySelectorAll(this._settings.inputSelector));
        this._buttonEl = this._formEl.querySelector(this._settings.buttonSelector)
    }

    _checkValid(inputEl) {
        if (!inputEl.validity.valid) {
            this._showInputError(inputEl, inputEl.validationMessage);
        } else {
            this._hideInputError(inputEl);
        }
    }

    _showInputError(inputEl, errorMessage) {
        const errorEl = this._formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
        inputEl.classList.add(this._settings.inputErrorClass);
        errorEl.textContent = errorMessage;
    }

    _hideInputError(inputEl) {
        const errorEl = this._formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
        inputEl.classList.remove(this._settings.inputErrorClass);
        errorEl.textContent = '';
    }

    _setEventListeners() {
        this._toggleButtonSaveState();
        this._inputList.forEach((inputEl) => {
            inputEl.addEventListener('input', () => {
                this._checkValid(inputEl);
                this._toggleButtonSaveState();
            });
        });
    }

    _disableBtnSave() {
        this._buttonEl.classList.add(this._settings.inactiveButtonClass);
        this._buttonEl.setAttribute('disabled', '');
    }

    _removeDisableBtnSave() {
        this._buttonEl.classList.remove(this._settings.inactiveButtonClass);
        this._buttonEl.removeAttribute('disabled');
    }

    _hasInvalidInput() {
        return this._inputList.some((inputEl) => {
            return !inputEl.validity.valid;
        })
    }

    _toggleButtonSaveState() {
        if (this._hasInvalidInput()) {
            this._disableBtnSave();
        } else {
            this._removeDisableBtnSave();
        }
    }

    clearInputErrors() {
        this._inputList.forEach((inputEl) => {
            this._hideInputError(inputEl)
        })
    }

    enableValidation() {
        this._formEl.addEventListener('reset', () => {
            this._disableBtnSave();
        });
        this._setEventListeners();
    }
}
