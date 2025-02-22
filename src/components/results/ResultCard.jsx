import { useState } from "react";

const ResultCard = ({ result }) => {
  const [hidden, setHidden] = useState(false);

  const toggleHide = () => {
    setHidden(!hidden);
  };


  

  return (
    <div
      className={`p-4 border-2 border-solid border-red-300 rounded shadow-md transition-colors duration-300 max-w-4xl w-full mx-auto
        ${
          hidden
            ? "bg-gray-200 text-gray-500"
            : "bg-white text-gray-900 font-bold"
        }`}
    >
      <div className="flex justify-between">
        <p>{result.nickname}</p>
        <div>
          <button
            onClick={toggleHide}
            className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            {hidden ? "Uncover" : "Hide"}
          </button>
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none">
            Delete
          </button>
        </div>
      </div>
      <h2 className="mb-1 font-bold text-3xl">{result.result}</h2>
      <p className="mb-2">{result.mbtiDescriptions}</p>
      <span className="text-sm text-gray-600">{result.date}</span>
    </div>
  );
};

export default ResultCard;
