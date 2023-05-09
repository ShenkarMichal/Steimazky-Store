import axios from "axios";

class InterceptorService {

    public createInterceptor(): void {
        const token = sessionStorage.getItem("token")
        axios.interceptors.request.use(request => {
            if(token) {
                request.headers = {
                    authorization: "Bearer " + token
                }
            }
            return request
        })
    }
}

const interceptorService = new InterceptorService()
export default interceptorService