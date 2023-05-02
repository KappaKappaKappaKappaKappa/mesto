// ВАЛИДАЦИЯ ФОРМ
const settings = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__form-input',
    buttonSelector: '.pop-up__form-button-save',
    inactiveButtonClass: 'pop-up__form-button-save_inactive',
    inputErrorClass: 'pop-up__form-input_type_error'
}

function checkValid(formEl, inputEl, settings) {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage, settings);
    } else {
        hideInputError(formEl, inputEl, settings);
    }
}

function showInputError(formEl, inputEl, errorMessage, settings) {
    const errorEl = formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
    inputEl.classList.add(settings.inputErrorClass);
    errorEl.textContent = errorMessage;
}

function hideInputError(formEl, inputEl, settings) {
    const errorEl = formEl.querySelector(`.pop-up__form-${inputEl.id}-error`);
    inputEl.classList.remove(settings.inputErrorClass);
    errorEl.textContent = '';
}

function setEventListeners(formEl, settings) {
    const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    const buttonEl = formEl.querySelector(settings.buttonSelector);

    inactiveBtnSave(inputList, buttonEl, settings);
    inputList.forEach((inputEl) => {
        inputEl.addEventListener('input', function () {
            checkValid(formEl, inputEl, settings);
            inactiveBtnSave(inputList, buttonEl, settings);
        });
    });
}

function enableValidation(settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach((formEl) => {
        formEl.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const buttonEl = formEl.querySelector(settings.buttonSelector);
            getDisableBtnSave(buttonEl);
        });
        setEventListeners(formEl, settings);
    });
}

function getDisableBtnSave(buttonEl){
    buttonEl.classList.add(settings.inactiveButtonClass);
    buttonEl.setAttribute('disabled', '');
}

function removeDisableBtnSave(buttonEl){
    buttonEl.classList.remove(settings.inactiveButtonClass);
    buttonEl.removeAttribute('disabled');
}

function hasInvalidInput(inputList) {
    return inputList.some((inputEl) => {
        if (!inputEl.validity.valid) {
            return true;
        } else {
            return false;
        }
    })
}

function inactiveBtnSave(inputList, buttonEl, settings) {
    if (hasInvalidInput(inputList)) {
        getDisableBtnSave(buttonEl);
    } else {
        removeDisableBtnSave(buttonEl);
    }
}

enableValidation(settings);
// ВАЛИДАЦИЯ ФОРМ