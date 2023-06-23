export default class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
        this._token = options.headers.authorization;
    }

    _checkAnswer(res) {
        return res.ok ? res.json() : Promise.reject
    }

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkAnswer)
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkAnswer)
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.profession
            })
        })
            .then(this._checkAnswer)
    }

    setNewAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._checkAnswer)
    }

    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link
            })
        })
            .then(this._checkAnswer)
    }

    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: { authorization: this._token }
        })
        .then(this._checkAnswer)
    }

    deleteLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: { authorization: this._token }
        })
        .then(this._checkAnswer)
    }

    deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token
            }
        })
        .then(this._checkAnswer)
    }
}