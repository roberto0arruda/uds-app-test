import axios from 'axios'

const { VUE_APP_API_PROTOCOL, VUE_APP_API_HOST } = process.env

export default axios.create({
    baseURL: `${VUE_APP_API_PROTOCOL}://${VUE_APP_API_HOST}`,
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})