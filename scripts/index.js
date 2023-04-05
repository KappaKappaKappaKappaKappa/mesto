let popUp = document.querySelector('.pop-up')
let editButton = document.querySelector('.profile-info__edit-button')
let closeButton = document.querySelector('.pop-up__form-button-close')

let popUpName = document.querySelector('.pop-up__form-input_input_name')
let popUpProfession = document.querySelector('.pop-up__form-input_input_profession')
let profileName = document.querySelector('.profile-info__name')
let profileProfession = document.querySelector('.profile-info__profession')

let saveButton = document.querySelector('.pop-up__form-button-save')

let popUpForm = document.querySelector('.pop-up__form')

function openPopUp() {
    popUpName.value = profileName.textContent;
    popUpProfession.value = profileProfession.textContent;
    popUp.classList.add('pop-up_opened')
}

editButton.addEventListener('click', openPopUp)

function closePopUp() {
    popUp.classList.remove('pop-up_opened')
}

closeButton.addEventListener('click', closePopUp)

function savePopUp(event) {
    event.preventDefault();
    profileName.textContent = popUpName.value;
    profileProfession.textContent = popUpProfession.value;
    closePopUp()
}

popUpForm.addEventListener('submit', savePopUp)