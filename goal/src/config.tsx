import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://amb-api-dev.embetter.in"
});