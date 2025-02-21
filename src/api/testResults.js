import axios from "axios"


const TEST_RESULTS_URL = "https://intermediate-unruly-paneer.glitch.me/"

export const testResultsApi = axios.create({
  baseURL: TEST_RESULTS_URL,
})


export const getTestResults = async () => {
  const response = await testResultsApi.get('/testResults');
  return response.data

}