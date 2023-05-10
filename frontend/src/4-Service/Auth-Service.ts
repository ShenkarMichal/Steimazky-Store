import axios from "axios"
import CredentialsModel from "../3-Models/CredentialsModel"
import UserModel from "../3-Models/UserModel"
import appConfig from "../2-Utils/Config"

class AuthService {


    public async register(user:UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerURL, user)
        const token = response.data
        sessionStorage.setItem("token", token)  
    }

    public async login(credential:CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginURL, credential)
        const token = response.data
        console.log(token)
        sessionStorage.setItem("token", token)  
    }

    public logout() {
        sessionStorage.removeItem("token")
    }
}



const authService = new AuthService()
export default authService