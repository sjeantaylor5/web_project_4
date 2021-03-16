class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector, nameInput, descriptionInput }) {
        this._name = document.querySelector(userNameSelector);
        this._description = document.querySelector(userDescriptionSelector);
        this._nameInput = document.getElementById(nameInput);
        this._descriptionInput = document.getElementById(descriptionInput);
    }

    getUserInfo() {
        return [this._name.innerText, this._description.innerText];
    }


    setUserInfo(name, description, id, avatar) {
        this.id = id;
        this._name.innerText = name;
        this._description.innerText = description;
        this._nameInput.value = name;
        this._descriptionInput.value = description;
    }
}

export default UserInfo;