import { Request, Response, NextFunction } from 'express'


function routeNotFound(request: Request, response: Response, next: NextFunction) {

    const err = new RouteNotFoundErrorModel(request.originalUrl)
    next(err)
}

export default routeNotFound