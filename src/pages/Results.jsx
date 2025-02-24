import Loading from "../components/layout/Loading";
import ResultCard from "../components/results/ResultCard";
import useAuthStore from "../store/authStore";
import { useResults } from "../utils/hooks/useResults.api";

const Results = () => {
  const { getTestResults } = useResults();
  const { userId } = useAuthStore().user;
  const { data: testResults, error, isLoading } = getTestResults;

  if (error) {
    return <p>Error</p>;
  }
  if (isLoading) return <Loading />;

  const filteredResults = testResults.filter(
    (result) => result.visibility || result.user === userId,
  );

  return (
    <div className="flex flex-col gap-4">
      {filteredResults.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
