import axios from "axios"

// instance

export const testResultsApi = axios.create({
  baseURL: import.meta.env.VITE_TEST_RESULTS_URL,
})

export const fetchTestResults = async () => {
  try {
    const response = await testResultsApi.get('/testResults');
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export const createTestResult = async (result) => {
  try {
    const response = await testResultsApi.post('/testResults', result)
    return response.data;
  } catch (error) {
    console.error(error)
  }
}

//  visibility = { "visibility : false or true "}
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    
    const response = await testResultsApi.patch(`/testResults/${id}`, {visibility : !visibility})
    return response.data;
  } catch (error) {
    console.error(error)
  }

}

export const deleteTestResult = async (id) => {
  try {
    const response = await testResultsApi.delete(`/testResults/${id}`);
    return response.data
  } catch (error) {
    console.error(error)
  }
}

