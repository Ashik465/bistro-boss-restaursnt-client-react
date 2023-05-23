import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navbar/NavBar";


const MainLayout = () => {
    return (
        <>
          <NavBar></NavBar>
          <Outlet></Outlet> 
          <Footer></Footer>


        </>
    );
};

export default MainLayout;