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
            .then(res => res.ok ? res.json() : Promise.reject("Error!" + res.statusText))
            .catch((err) => console.log(err));
    }

    // GET https://around.nomoreparties.co/v1/groupId/users/me
    getUserInfo() {
        return fetch(this._baseUrl + "/users/me", {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject("Error!" + res.statusText))
            .catch((err) => console.log(err));
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
            .then(res => res.ok ? res.json() : Promise.reject("Error!" + res.statusText))
            .catch((err) => console.log(err));
    }

    //DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
    removeCard(cardId) {
        return fetch(this._baseUrl + "/cards/" + cardId, {
                method: "DELETE",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject("Error!" + res.statusText))
            .catch((err) => console.log(err));
    }

    //PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
    //DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId

    // changeLikeCardStatus(cardID, like) {

    // }


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
            .then(res => res.ok ? res.json() : Promise.reject("Error!" + res.statusText))
            .catch((err) => console.log(err));
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
            .then(res => res.ok ? res.json() : Promise.reject("Error!" + res.statusText))
            .catch((err) => console.log(err));
    }


}

export default Api;