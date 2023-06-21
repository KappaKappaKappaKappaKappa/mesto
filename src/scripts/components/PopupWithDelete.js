import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup{
    constructor(popupSelector){
        super(popupSelector)
        this._popupDeleteConfirm = document.querySelector('.popupSelector')
    }
}