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
        this._inactiveBtnSave();
        this._inputList.forEach((inputEl) => {
            inputEl.addEventListener('input', () => {
                this._checkValid(inputEl);
                this._inactiveBtnSave();
            });
        });
    }

    _getDisableBtnSave() {
        this._buttonEl.classList.add(this._settings.inactiveButtonClass);
        this._buttonEl.setAttribute('disabled', '');
    }

    _removeDisableBtnSave() {
        this._buttonEl.classList.remove(this._settings.inactiveButtonClass);
        this._buttonEl.removeAttribute('disabled');
    }

    _hasInvalidInput() {
        return this._inputList.some((inputEl) => {
            if (!inputEl.validity.valid) {
                return true;
            } else {
                return false;
            }
        })
    }

    _inactiveBtnSave() {
        if (this._hasInvalidInput()) {
            this._getDisableBtnSave();
        } else {
            this._removeDisableBtnSave();
        }
    }

    clearInputErrors() {
        this._inputList.forEach((inputEl) => {
            const errorEl = this._formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
            inputEl.classList.remove(this._settings.inputErrorClass);
            errorEl.textContent = '';
        })
    }

    enableValidation() {
        this._formEl.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._getDisableBtnSave();
            });
            this._setEventListeners();
    }
}
