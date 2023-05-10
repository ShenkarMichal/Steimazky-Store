import Joi from "joi"

class UserModel {
    public userId: number
    public firstName: string
    public lastName: string
    public username: string
    public password: string

    public constructor(user: UserModel){
        this.userId = user.userId
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.username = user.username
        this.password = user.password
    }

    public static validationSchema = Joi.object({
        userId: Joi.number().optional().integer().positive(),
        firstName: Joi.string().required().min(3).max(10),
        lastName: Joi.string().required().min(3).max(10),
        username: Joi.string().required().min(3).max(10),
        password: Joi.string().required().min(6).max(20)
    })

    public validate(): string {
        const resoult = UserModel.validationSchema.validate(this)
        return resoult.error?.message
    }
}

export default UserModel