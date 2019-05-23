import Axios from 'axios-observable'

const instance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL
});
instance.defaults.params = {}
instance.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;
export default instance;
