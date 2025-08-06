import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
    "Content-Type": "application/json",
  },
}); 

const getProducts = async () => {
  const response = await api.get('/api/json/v1/1/filter.php?c=Seafood');
  return response;
};

const getProduct = async (id) => {
  const response = await api.get(`/api/json/v1/1/lookup.php?i=${id}`);
  return response;
};


const apiService = {
  getProducts,
  getProduct,
};

export default apiService;