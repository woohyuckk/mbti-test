import axios from "axios";
import useAuthStore from "../zustand/authStore";

// instance
const API_URL = 'https://www.nbcamp-react-auth.link';

export const authapi = axios.create({
  baseURL: API_URL,
})

//  토큰 추가 
authapi.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().user.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }
);

// authapi.interceptors.response.use(
//   function (response) {
//     console.log("인터셉트 응답 받았어요!");
//     // 정상 응답
//     return response;
//   },
//   function (error) {
//     console.log("인터셉트 응답 못받았어요...ㅠㅠ");
//     return Promise.reject(error);
//   },
// );

export const register = async (userData) => {
  const response = await authapi.post('/register', userData);
  return response.data;
}

export const login = async (userData) => {
  const response = await authapi.post('/login', userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await authapi.get('/user')
  return response.data
};


export const updateProfile = async (formData) => {
  const response = await authapi.patch('/profile', formData, {
    headers: {
      "Content-Type" : "multipart/form-data",
    }
    
  })
  return response.data
};