import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createTestResult, deleteTestResult, fetchTestResults, updateTestResultVisibility } from "../../api/testResults";


export const useResults = () => {

  const queryClient = useQueryClient();

  // fetch 
  const getTestResults = useQuery({
    queryKey: ["testResults"],
    queryFn: fetchTestResults,
  });

  // 추가
  const addTestResult = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });
  // 수정
  const updateTestResult = useMutation({
    mutationFn:updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  })
  // 삭제
  const removeTestResult = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  })

  return { getTestResults, addTestResult, updateTestResult, removeTestResult }
}