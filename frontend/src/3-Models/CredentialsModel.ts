class CredentialsModel {
    public username: string
    public password: string

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

export default CredentialsModel