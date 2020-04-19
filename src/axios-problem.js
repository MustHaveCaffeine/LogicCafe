import axios from 'axios';

const instance = axios.create({
    baseURL: "https://logiccafe-72087.firebaseio.com/"
})

export default instance;