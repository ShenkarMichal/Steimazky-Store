import { useForm } from "react-hook-form"
import "./Register.css"
import UserModel from "../../../3-Models/UserModel"
import authService from "../../../4-Service/Auth-Service"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import notify from "../../../4-Service/NotifyService"

function Register(): JSX.Element{

    const {register, handleSubmit, formState} = useForm<UserModel>()
    const navigate = useNavigate()

    async function addUser(user:UserModel) {
        try {
            await authService.register(user)
            notify.success("Wellcome!!")
            navigate("/books")            
        }
        catch (err: any) {
            notify.error(err)            
        }
    }


    return(
        <div className="Register">
            <NavLink to={"/auth/login"}>Do you have account?</NavLink>
            <form onSubmit={handleSubmit(addUser)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName", UserModel.firstNameValidatoin)} /> <br />
                <span className="ErrorMsg">{formState.errors.firstName?.message}</span> <br />

                <label>Last Name:</label>
                <input type="text" {...register("lastName", UserModel.lastNameValidatoin)} /> <br />
                <span className="ErrorMsg">{formState.errors.lastName?.message}</span> <br />

                <label>username:</label>
                <input type="text" {...register("username", UserModel.usernameValidatoin)} /> <br />
                <span className="ErroMsg">{formState.errors.username?.message}</span> <br />

                <label>Password:</label>
                <input type="text" {...register("password", UserModel.passwordValidatoin)} /> <br />
                <span className="ErrorMsg">{formState.errors.password?.message}</span> <br />

                <button>Register</button>
            </form>

        </div>
    )
}

export default Register