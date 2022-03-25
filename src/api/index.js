import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_API_KEY;
const api = axios.create({ baseURL: API_BASE_URL });

export const GET_ALL_AUTHOR = async () => {
	return await api.get('/').then((res) => res.data);
};

export const GET_AUTHOR_BOOKS = async (id) => {
	return await api.get(`/books/${id}`).then((res) => res.data);
};
