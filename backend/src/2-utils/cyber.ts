import Jwt from 'jsonwebtoken'
import UserModel from '../4-models/user-model';
import { Request } from 'express';

const secretKey = "SteimazkyStore-MichalShenkar"

function getNewToken(user: UserModel): string {

    const container = { user }
    const options = {expiresIn: "3h"}

    const token = Jwt.sign(container, secretKey, options)

    return token
}

function verifyToken(request: Request): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject)=>{
        try{
            const header = request.headers.authorization
            if(!header){
                resolve(false)
                return
            }
            const token = header.substring(7)
            if(!token){
                resolve(false)
                return
            }
            Jwt.verify(token,secretKey, err =>{
                if(err){
                    resolve(false)
                    return
                }
                resolve (true)
            })
        }
        catch(err: any){
            reject(err)
        }
    })
}

export default {
    getNewToken,
    verifyToken
}