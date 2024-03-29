class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    // GET https://around.nomoreparties.co/v1/groupId/cards
    getCardList() {
        return fetch(this._baseUrl + "/cards", {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error("Error!" + res.statusText)));
    }

    // GET https://around.nomoreparties.co/v1/groupId/users/me
    getUserInfo() {
        return fetch(this._baseUrl + "/users/me", {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error("Error!" + res.statusText)));
    }

    //POST https://around.nomoreparties.co/v1/groupId/cards
    addCard({ name, link }) {
        return fetch(this._baseUrl + "/cards", {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error("Error!" + res.statusText)));
    }

    //DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
    removeCard(cardId) {
        return fetch(this._baseUrl + "/cards/" + cardId, {
                method: "DELETE",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error("Error!" + res.statusText)));
    }

    //PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
    addLike(cardId) {
        return fetch(this._baseUrl + "/cards/likes/" + cardId, {
                method: "PUT",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error("Error!" + res.statusText)));
    }

    //DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
    removeLike(cardId) {
        return fetch(this._baseUrl + "/cards/likes/" + cardId, {
                method: "DELETE",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error("Error!" + res.statusText)));
    }


    //PATCH https://around.nomoreparties.co/v1/groupId/users/me
    setUserInfo({ name, about }) {
        return fetch(this._baseUrl + "/users/me", {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    about
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error("Error!" + res.statusText)));
    }


    //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
    setUserAvatar({ avatar }) {
        return fetch(this._baseUrl + "/users/me/avatar", {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error("Error!" + res.statusText)));
    }


}

export default Api;