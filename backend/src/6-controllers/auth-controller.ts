import express, { NextFunction, Request, Response } from 'express'
import UserModel from '../4-models/user-model'
import authLogic from '../5-logics/auth-logic'
import CredentialsModel from '../4-models/credentials-model'

const router = express.Router()

//Login
router.post("/login", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const user = new UserModel(request.body)
        const token = await authLogic.login(user)
        response.status(201).json(token)        
    }
    catch (err: any) {
        next(err)        
    }
})

//Register
router.post("/register", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const credential = new CredentialsModel(request.body)
        const token = await authLogic.register(credential)
        response.json(token)        
    }
    catch (err: any) {
        next(err)        
    }
})

export default router