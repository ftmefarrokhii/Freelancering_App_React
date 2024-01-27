import axios from "axios"

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
    // config haye khodemoon ro mizrim
    baseURL: BASE_URL,
    withCredentials:true
})

app.interceptors.request.use(
    (res) => res,
    (err) => Promise.reject(err)
);
app.interceptors.response.use(
    (res) => res,
    async (err) => {
        console.log(err.config);
        const originalConfig = err.config;
        if(err.response.status === 401 && !originalConfig._retry){
            originalConfig._retry = true;
            try {
                const {data} = await axios.get(`${BASE_URL}/user/refresh-token`,{withCredentials:true})
                // inja access token va refresh token jadid ro grfte
                if(data) return app(originalConfig) 
                // yani age token jadid grft bargarde req ghabli ro anjam bde
            } catch (error) {
                return Promise.reject(err)
            }
        }
        return Promise.reject(err)
    }
);
const http = {
    get : app.get,
    post : app.post,
    patch : app.patch,
    put : app.put,
    delete : app.delete
}

export default http;