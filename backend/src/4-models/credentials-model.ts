import Joi from "joi"

class CredentialsModel {
    public username: string
    public password: string

    public constructor(credential: CredentialsModel) {
        this.username = credential.username
        this.password = credential.password
    }

    public static validationSchema = Joi.object({
        username: Joi.string().required().min(3).max(10),
        password: Joi.string().required().min(6).max(20)
    })

    public validate(): string {
        const resoult = CredentialsModel.validationSchema.validate(this)
        return resoult.error?.message
    }
    
}

export default CredentialsModel