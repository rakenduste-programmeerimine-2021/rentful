//See fail on loodud selleks, et me ei peaks axiosele iga kord URL-i sisse andma, kui midagi Fetch'ida tahame
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});