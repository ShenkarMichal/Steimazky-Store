class UserModel {
    public userId: number
    public firstName: string
    public lastName: string
    public username: string
    public password: string

    public static firstNameValidatoin = {
        required: {value: true, message: "First-Name is missing"},
        min: {value: 3, message: "First-Name is too short"},
        max: {value: 10, message: "First-Name is too long"}
    }
    public static lastNameValidatoin = {
        required: {value: true, message: "Last-Name is missing"},
        min: {value: 3, message: "Last-Name is too short"},
        max: {value: 10, message: "Last-Name is too long"}
    }
    public static usernameValidatoin = {
        required: {value: true, message: "username is missing"},
        min: {value: 3, message: "username is too short"},
        max: {value: 10, message: "username is too long"}
    }
    public static passwordValidatoin = {
        required: {value: true, message: "Password is missing"},
        min: {value: 6, message: "Password is too short"},
        max: {value: 20, message: "Password is too long"}
    }
}

export default UserModel