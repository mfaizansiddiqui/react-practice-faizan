import { Button } from "antd";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Button type="primary">Get Started</Button>
      <Outlet />
    </div>
  );
};

export default Home;