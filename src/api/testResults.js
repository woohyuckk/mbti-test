import axios from "axios"


const TEST_RESULTS_URL = "https://intermediate-unruly-paneer.glitch.me/"

export const testResultsApi = axios.create({
  baseURL: TEST_RESULTS_URL,
})


export const getTestResults = async () => {
  try {
    const response = await testResultsApi.get('/testResults');
    return response.data
  } catch (error) {
    console.error(error);  
  }
}


export const createTestResult = async(result) => {
  try {
    const response = await testResultsApi.post('/testResults',result) 
    return response.data;
  }catch(error){
    console.error(error)
  }
}

