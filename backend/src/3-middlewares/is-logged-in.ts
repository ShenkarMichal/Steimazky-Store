import { Request, Response, NextFunction } from 'express'
import cyber from '../2-utils/cyber'
import { UnAuthorizedErrorModel } from '../4-models/errors-model'


async function isLoggedIn(request: Request, response: Response, next: NextFunction) {

    const isLogged = await cyber.verifyToken(request)
    if(!isLogged) throw new UnAuthorizedErrorModel("Invalid token")

    next()
}

export default isLoggedIn