class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector }) {
        this._userName = userNameSelector;
        this._userDescription = userDescriptionSelector;
        this._name = document.querySelector(this._userName);
        this._description = document.querySelector(this._userDescription);
    }

    getUserInfo() {
        return [this._name.innerText, this._description.innerText];
    }


    setUserInfo(name, description) {
        this._name.innerText = name;
        this._description.innerText = description;
    }
}

export default UserInfo;