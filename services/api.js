import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
    "Content-Type": "application/json",
  },
}); 

const getProducts = async (categorie) => {
  const url = categorie 
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`
      : 'https://www.themealdb.com/api/json/v1/1/search.php?s='; 
  const response = await api.get(url);
  return response;
};

const getProduct = async (id) => {
  const response = await api.get(`/api/json/v1/1/lookup.php?i=${id}`);
  return response;
};

const getCategories = async (id) => {
  const response = await api.get('/api/json/v1/1/categories.php');
  return response;
};


const apiService = {
  getProducts,
  getProduct,
  getCategories,
};

export default apiService;