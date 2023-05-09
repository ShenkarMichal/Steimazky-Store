import Jwt from 'jsonwebtoken'
import UserModel from '../4-models/user-model';

const secretKey = "SteimazkyStore-MichalShenkar"

function getNewToken(user: UserModel): string {

    const container = { user }
    const options = {expiresIn: "3h"}

    const token = Jwt.sign(container, secretKey, options)

    return token
}

export default {
    getNewToken
}