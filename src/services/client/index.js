import axios from 'axios';
import {getBaseUrl} from 'Utilities/utils';

module.exports = axios.create({
    baseURL: getBaseUrl(process.env.NODE_ENV)
});