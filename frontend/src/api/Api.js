//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: import.meta.env.API_BASE_URL
})

export default Api