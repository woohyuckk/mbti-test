import useAuthStore from "../authStore";

const Home = () => {
  const a = useAuthStore((state) => state);
  console.log(a);
  return (
    <div>
      <h3>Home</h3>
    </div>
  );
};

export default Home;
