const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-200">
      <h3 className="text-5xl font-bold my-6 ">무료 성격 테스트</h3>
      <p className="mb-8">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">성격 유형 검사</h2>
          <p>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">성격 유형 이해</h2>
          <p>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">팀 평가</h2>
          <p>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>
      <button className="inline-block  bg-red-500 text-white py-2 px-6 rounded-full  transition mb-4 hover:font-bold">
        내 성격 알아보러 가기
      </button>
    </div>
  );
};

export default Home;
