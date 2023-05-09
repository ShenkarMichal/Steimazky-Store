import { Request, Response, NextFunction } from 'express'


function isLoggedIn(request: Request, response: Response, next: NextFunction) {

    const err = new RouteNotFoundErrorModel(request.originalUrl)
    next(err)
}

export default isLoggedIn