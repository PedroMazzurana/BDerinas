import { Router } from 'express'
import userController from './users/user.controller'

const routes = Router()


routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.findById)
routes.get('/users/:firstName', userController.findByFirstName)
routes.get('/users/:lastName', userController.findByLastName)
routes.get('/users/:email', userController.findByEmail)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)



export default routes