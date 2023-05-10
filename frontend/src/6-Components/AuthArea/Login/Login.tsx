import { useForm } from "react-hook-form"
import "./Login.css"
import CredentialsModel from "../../../3-Models/CredentialsModel"
import authService from "../../../4-Service/Auth-Service"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import notify from "../../../4-Service/NotifyService"

function Login():JSX.Element {

    const {register, handleSubmit, formState} = useForm<CredentialsModel>()
    const navigate = useNavigate()

    async function sendLogin(credentials:CredentialsModel) {
        try {
            await authService.login(credentials)
            alert("Wellcome Back!")
            navigate("/books")            
        }
        catch (err: any) {
            notify.error(err)            
        }
    }

    return(
        <div className="Login">
            <NavLink to={"/auth/register"}>Dont have account?</NavLink>
            <form onSubmit={handleSubmit(sendLogin)}>
                <label>username:</label>
                <input type="text" {...register("username", CredentialsModel.usernameValidatoin)} /> <br />
                <span className="ErrorMsg">{formState.errors.username?.message}</span> <br />

                <label>Password:</label>
                <input type="text" {...register("password", CredentialsModel.passwordValidatoin)} /> <br />
                <span className="ErrorMsg">{formState.errors.password?.message}</span> <br />

                <button>Login</button>
                
            </form>

        </div>
    )
}

export default Login