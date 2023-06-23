export default class Section {
    constructor(renderer, containerSelector) {
        this._container = document.querySelector(containerSelector);
        // this._initialCard = items;
        this._renderer = renderer;
    }

    addCardFromArr(dataCard) {
        dataCard.forEach(element => {
            this._renderer(element)
        })
    }

    addItemPrepend(elementDom) {
        this._container.prepend(elementDom)
    }

    addItemAppend(elementDom) {
        this._container.append(elementDom)
    }
}