import axios from 'axios';

const getBaseUrl = (env) => {
    switch (env) {
        case 'development':
            return 'http://localhost:4000/api';
        case 'production':
            return 'https://tranceit-api.herokuapp.com/api'

    }
}

module.exports = axios.create({
    baseURL: getBaseUrl(process.env.NODE_ENV)
});