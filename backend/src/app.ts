import express from 'express'
import routeNotFound from './3-middlewares/route-not-found'
import catchAll from './3-middlewares/catch-all'
import appConfig from './2-utils/app-config'
import booksController from './6-controllers/books-controller'
import authController from './6-controllers/auth-controller'
import cors from 'cors'

const server = express()
server.use(cors())

server.use(express.json())
server.use("/api", booksController)
server.use("/api/auth", authController)
server.use("*",routeNotFound )
server.use(catchAll)

server.listen(appConfig.port, ()=>console.log(`Listen on http://localhost:${appConfig.port}`))