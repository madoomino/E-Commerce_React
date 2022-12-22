import Categories from "../../components/Categories/Categories";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Outlet />
      <Categories />
    </>
  );
};

export default Home;
