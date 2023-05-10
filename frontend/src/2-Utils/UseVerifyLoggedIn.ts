import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function useVerifyLoggedIn() {

    const navigate = useNavigate()
    useEffect(()=>{

        if(!sessionStorage.getItem("token")){
            alert("You are not logged in!")
        }

    },[])

}

export default useVerifyLoggedIn