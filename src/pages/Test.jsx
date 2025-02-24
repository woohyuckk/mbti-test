import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import TestForm from "../components/test/TestForm";
import { FormattingDate } from "../utils/dateFormat";
import useAuthStore from "../store/authStore";
import { useResults } from "../utils/hooks/useResults.api";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const {
    user: { userId, nickname },
  } = useAuthStore((state) => state);
  const { addTestResult } = useResults();

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    const newTestResult = {
      nickname,
      result: mbtiResult,
      mbtiDescriptions: mbtiDescriptions[mbtiResult],
      visibility: true,
      date: FormattingDate(new Date()),
      user: userId,
    };
    try {
      await addTestResult.mutateAsync(newTestResult);
    } catch (error) {
      console.error(error);
    }
    setResult(mbtiResult);

    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="flex w-full flex-col items-center justify-center bg-white">
      <div className="h-full w-full max-w-lg overflow-y-auto rounded-lg bg-white p-8">
        {!result ? (
          <>
            <h1 className="text-primary-color mb-6 text-3xl font-bold">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-primary-color mb-6 text-3xl font-bold">
              테스트 결과: {result}
            </h1>
            <p className="mb-6 text-lg text-gray-700">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="hover:bg-primary-dark w-full rounded-lg bg-slate-400 py-3 font-semibold text-white transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
