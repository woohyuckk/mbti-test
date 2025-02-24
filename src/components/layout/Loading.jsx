const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      <span className="mt-4 text-lg font-medium text-blue-600">Loading...</span>
    </div>
  );
};

export default Loading;
