import ResultCard from "../components/results/ResultCard";
import { useResults } from "../hooks/useResults";

const Results = () => {
  const { getTestResults } = useResults();

  const { data: testResults, error, isLoading } = getTestResults;


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
