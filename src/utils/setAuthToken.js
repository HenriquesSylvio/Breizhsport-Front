import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        //axios.defaults.headers.common['Olassist-Agent'] = `citykomi_backoffice_log`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;