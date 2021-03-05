class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector }) {
        this._userName = userNameSelector;
        this._userDescription = userDescriptionSelector;
    }

    getUserInfo() {
        return [document.querySelector(this._userName).innerText, document.querySelector(this._userDescription).innerText];
    }


    setUserInfo(name, description) {
        document.querySelector(this._userName).innerText = name;
        document.querySelector(this._userDescription).innerText = description;
    }
}

export default UserInfo;