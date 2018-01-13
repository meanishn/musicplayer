import axios from 'axios';

const API_KEY = '84b808d130726b209bf090678cae7823';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(term) {
    const request = axios.get(`${ROOT_URL}&q=${term}`);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}