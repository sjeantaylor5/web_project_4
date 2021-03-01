class UserInfo {
    constructor(userNameSelector, userDescriptionSelector) {
        this._userName = userNameSelector;
        this._userDescription = userDescriptionSelector;
    }

    getUserInfo(nameInput, aboutInput) {
        this._userName.getElementById('profile-name').value = nameInput;
        this._userDescription.getElementById('profile-text').value = aboutInput;

        return [this._userName, this._userDescription];
    }

    setUserInfo(nameInput, aboutInput) {
        this._userName.getElementById('profile-name').textContent = nameInput;
        this._userDescription.getElementById('profile-text').textContent = aboutInput;
    }
}

export default UserInfo;