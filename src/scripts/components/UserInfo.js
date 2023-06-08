export default class UserInfo {
    constructor(userInfo) {
        this._profileName = document.querySelector(userInfo.profileNameSelector);
        this._profileProfession = document.querySelector(userInfo.profileProfessionSelector)

    }

    getUserInfo() {
        return { username: this._profileName.textContent, profession: this._profileProfession.textContent }
    }

    setUserInfo(dataInfoUser){
        this._profileName.textContent = dataInfoUser.username;
        this._profileProfession.textContent = dataInfoUser.profession;
    }
}