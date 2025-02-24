import Loading from "../components/layout/Loading";
import ResultCard from "../components/results/ResultCard";
import { useResults } from "../utils/hooks/useResults.api";

const Results = () => {
  const { getTestResults } = useResults();

  const { data: testResults, error, isLoading } = getTestResults;


  if (error) {
    return <p>Error</p>;
  }
  if (isLoading) return <Loading/>

  return (
    <div className="flex flex-col gap-4">
      {testResults.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
