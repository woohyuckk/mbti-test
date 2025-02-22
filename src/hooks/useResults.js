import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTestResult, deleteTestResult, updateTestResultVisibility } from "../api/testResults";





export const useResults = () => {

  const queryClient = useQueryClient();

  
  // 추가
  const addTestResult = useMutation({
    mutationFn: (newTestResult) => createTestResult(newTestResult),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });
  // 수정
  const updateTestResult = useMutation({
    mutationFn: (id, visibility) => updateTestResultVisibility(id, visibility),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  })
  // 삭제
  const removeTestResult = useMutation({
    mutationFn: (id) => deleteTestResult(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  })

  return {addTestResult, updateTestResult, removeTestResult}
}