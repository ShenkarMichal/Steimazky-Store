import { Request, Response, NextFunction } from 'express'
import logger from '../2-utils/logget'


function catchAll(err: any, request: Request, response: Response, next: NextFunction) {
    console.log(err)
    logger(err.msg)
    response.status(err.status).send(err.msg)

}

export default catchAll