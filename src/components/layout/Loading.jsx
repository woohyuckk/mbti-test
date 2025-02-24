
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="mt-4 text-blue-600 text-lg font-medium">Loading...</span>
    </div>
  );
};

export default Loading;
