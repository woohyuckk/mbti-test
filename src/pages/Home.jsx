import useUsersStore from "../zustand/usersStore";

const Home = () => {
  const { token } = useUsersStore((state) => state.users);
  console.log(token);
  return (
    <div><h3>Home</h3></div>
  )
}

export default Home