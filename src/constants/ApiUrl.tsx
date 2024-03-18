import 'react-native-config';

export const BASE_URL = process.env.BASE_URL;
export const API_KEY = process.env.API_KEY;
export const URL_POPULAR = `${BASE_URL}/popular?api_key=${API_KEY}`;
export const URL_MOVIES = `${BASE_URL}`;
