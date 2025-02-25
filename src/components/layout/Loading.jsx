import  { useState, useEffect } from 'react';

const Loading = () => {
  const loadingTexts = ["Loading.", "Loading ..", "Loading..."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % loadingTexts.length);
    }, 500); // 0.5초마다 텍스트 변경
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* 회전하는 원 */}
      <div className="w-16 h-16 border-4 border-solid border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      {/* 애니메이션 텍스트 */}
      <div className="text-xl font-bold text-gray-700">
        {loadingTexts[index]}
      </div>
    </div>
  );
};

export default Loading;