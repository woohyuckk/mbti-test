import useAuthStore from "../../store/authStore";
import { useResults } from "../../utils/hooks/useResults.api";

const ResultCard = ({ result }) => {
  const { updateTestResult, removeTestResult } = useResults();

  const {
    user: { userId },
  } = useAuthStore((state) => state);
  const isSignInUser = result.user === userId ? true : false;

  const toggleHide = (id, visibility) => {
    updateTestResult.mutate( id, visibility );
  };

  const deleteTestResultHandler = (id) => {
    removeTestResult.mutate( id );
  };

  return (
    <div
      className={`p-4 border-2 border-solid border-red-300 rounded shadow-md transition-colors duration-300 max-w-4xl w-full mx-auto
        ${
          result.visibility
            ? "bg-white text-gray-900 font-bold"
            : "bg-gray-200 text-gray-500"
        }`}
    >
      <div className="flex justify-between border-b border-solid border-secondary p-2 ">
        <p>{result.nickname}</p>
        <div>
          {isSignInUser && (
            <button
              onClick={() => toggleHide(result.id, result.visibility)}
              className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              {result.visibility ? "비공개" : "공개"}
            </button>
          )}
          {isSignInUser && (
            <button
              onClick={() => deleteTestResultHandler(result.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <h2 className="mb-2 font-bold text-3xl text-tertiary ">{result.result}</h2>
      <p className="mb-2">{result.mbtiDescriptions}</p>
      <span className="text-sm text-gray-600">{result.date}</span>
    </div>
  );
};

export default ResultCard;
