import { Request, Response, NextFunction } from 'express'


function catchAll(err: any, request: Request, response: Response, next: NextFunction) {
    console.log(err)
    response.status(err.status).send(err.msg)

}

export default catchAll