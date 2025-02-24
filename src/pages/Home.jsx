import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col items-center justify-center shadow-custom rounded-xl text-red-900 bg-primary">
      <h3 className="my-6 text-5xl font-bold">무료 성격 테스트</h3>
      <p className="mb-8">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.
      </p>
      <div className="mb-12 grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">성격 유형 검사</h2>
          <p>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">성격 유형 이해</h2>
          <p>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">팀 평가</h2>
          <p>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate("/test")}
        className="mb-4 inline-block rounded-full bg-red-500 px-6 py-2 text-white transition hover:font-bold"
      >
        내 성격 알아보러 가기
      </button>
    </div>
  );
};

export default Home;
