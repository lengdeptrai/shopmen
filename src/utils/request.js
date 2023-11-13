import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
})

export const get = async (url, option = {}) =>{
    const response = await request.get(url, option)
    return response.data
}

export default request;