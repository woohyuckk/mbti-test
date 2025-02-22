import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import ResultCard from "../components/results/ResultCard";

const Results = () => {
  const {
    data: testResults,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  console.log(testResults);

  if (error) {
    return <p>Error</p>;
  }
  if (isLoading) return <p>로딩중</p>;

  return (
    <div className="flex flex-col gap-4">
      {testResults.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
