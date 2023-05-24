import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/popularMenu/PopularMenu";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
     <Cover img={menuImg} title='Our menu'></Cover>
     <PopularMenu></PopularMenu>
     <Cover img={menuImg} title='Our menu'></Cover>
     <PopularMenu></PopularMenu>
     <Cover img={menuImg} title='Our menu'></Cover>
     <PopularMenu></PopularMenu>
    </>
  );
};

export default Menu;
