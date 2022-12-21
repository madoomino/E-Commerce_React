import Categories from "../../components/Categories/Categories";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Outlet />
      <Categories />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jCY6DH8F4oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
};

export default Home;
