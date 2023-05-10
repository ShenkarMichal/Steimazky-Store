import { OkPacket } from "mysql";
import cyber from "../2-utils/cyber";
import dal from "../2-utils/dal";
import UserModel from "../4-models/user-model";
import CredentialsModel from "../4-models/credentials-model";
import { UnAuthorizedErrorModel } from "../4-models/errors-model";

async function register(user:UserModel): Promise<string> {
    user.password = cyber.hash(user.password)
    const sql = `INSERT INTO users
                VALUES(DEFAULT, ?,?,?,?)`
    const info:OkPacket = await dal.execute(sql, [user.firstName, user.lastName, user.username, user.password])
    user.userId = info.insertId

    const token = cyber.getNewToken(user) 
    return token  
}

async function login(credential:CredentialsModel): Promise<string> {
    credential.password = cyber.hash(credential.password)
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
    const user = await dal.execute(sql, [credential.username, credential.password])
    if(!user[0]) throw new UnAuthorizedErrorModel("The username or password incorrect")

    const token = cyber.getNewToken(user[0])
    return token    
}

export default {
    login, 
    register
}