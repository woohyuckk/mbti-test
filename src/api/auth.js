import axios from "axios";



const API_URL = 'https://www.nbcamp-react-auth.link';
const auth = axios.create({
  baseURL: API_URL,
  
})
  auth.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행
    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    // 오류 요청을 보내기 전 수행
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  },
);

auth.interceptors.response.use(
  function (response) {
    console.log("인터셉트 응답 받았어요!");
    // 정상 응답
    return response;
  },
  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  },
);

export const register = async (userData) => { 
  const response = await auth.post('/register', userData);
  
  return response.data;
}

export const login = async (userData) => {
  const response = await auth.post('/login', userData);
  return response.data;
};