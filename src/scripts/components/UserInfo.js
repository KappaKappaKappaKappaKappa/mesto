export default class UserInfo {
    constructor(userInfo) {
        this._profileName = document.querySelector(userInfo.profileNameSelector);
        this._profileProfession = document.querySelector(userInfo.profileProfessionSelector);
        this._profileAvatar = document.querySelector(userInfo.profileAvatar);
    }

    getUserInfo() {
        return { username: this._profileName.textContent, profession: this._profileProfession.textContent }
    }

    setUserInfo({ username, profession, avatar }) {
        this._profileAvatar.src = avatar;
        this._profileName.textContent = username;
        this._profileProfession.textContent = profession;
    }
}