import { UserType } from "./types/user.types";
import UserModel from './user.schema'

export class UserService {


    async create(user: UserType) {
        const createdUser = await UserModel.create(user)

        return createdUser
    }

    async list() {
        const listedUsers = await UserModel.find()

        return listedUsers
    }

    async findById(id: any) {
        const findedUser = await UserModel.findById(id)

        return findedUser
    }

    async findByFirstName(Name: string) {
        const user = await UserModel.find({
            firstName: Name
        }); 
    
        return user;
    }
    

    async findByLastName(lastName: any) {
        const user = await UserModel.find({
            lastName: lastName
        })

        return user
    }

    async findByEmail(email: any) {
        const user = await UserModel.find({
            email: email
        })

        return user
    }

    async update(id: any, dataToUpdate: UserType) {
        const updatedUser = await UserModel.findOneAndUpdate({_id: id}, {
            firstName: dataToUpdate.firstName,
            lastName: dataToUpdate.lastName,
            email: dataToUpdate.email,
            age: dataToUpdate.age
        }, {new: true})

        return updatedUser
    }

    async delete(id: any) {
        await UserModel.findOneAndDelete({_id: id})
        return
    }
}