import { useForm } from "react-hook-form"
import "./Register.css"
import UserModel from "../../../3-Models/UserModel"
import authService from "../../../4-Service/Auth-Service"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"

function Register(): JSX.Element{

    const {register, handleSubmit} = useForm<UserModel>()
    const navigate = useNavigate()

    async function addUser(user:UserModel) {
        try {
            await authService.register(user)
            alert("Wellcome!!")
            navigate("/books")            
        }
        catch (err: any) {
            alert(err)            
        }
    }


    return(
        <div className="Register">
            <NavLink to={"/auth/login"}>Do you have account?</NavLink>
            <form onSubmit={handleSubmit(addUser)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName")} /> <br />

                <label>Last Name:</label>
                <input type="text" {...register("lastName")} /> <br />

                <label>username:</label>
                <input type="text" {...register("username")} /> <br />

                <label>Password:</label>
                <input type="text" {...register("password")} /> <br />

                <button>Register</button>
            </form>

        </div>
    )
}

export default Register