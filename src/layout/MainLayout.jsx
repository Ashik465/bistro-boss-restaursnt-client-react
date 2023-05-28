import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navbar/NavBar";

const MainLayout = () => {
  const location = useLocation();
  // console.log(location)
  const NoHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup") 

  return (
    <>
      {NoHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>

      {NoHeaderFooter || <Footer></Footer>}

      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default MainLayout;
