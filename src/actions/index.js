import axios from 'axios';

const API_KEY = '4a1ff56cafb3cf431a5e88883d07e5eb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country='us') {
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

    console.log('Request:', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}