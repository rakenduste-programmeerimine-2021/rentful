import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "https://rentful1.herokuapp.com/api/"
});