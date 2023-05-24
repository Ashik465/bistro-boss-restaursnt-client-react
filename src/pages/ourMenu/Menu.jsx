import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./menuCategory/MenuCategory";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'


const Menu = () => {

 const [menu] = useMenu()

  const todayOffer = menu.filter(item => item.category === 'offered')

    const dessert = menu.filter(item => item.category === 'dessert') 
   
    const pizza = menu.filter(item => item.category === 'pizza') 
    const salad = menu.filter(item => item.category === 'salad') 
    const soup = menu.filter(item => item.category === 'soup') 
    
    



  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
     <Cover img={menuImg} title='Our menu'></Cover>
     {/* Todays offer section  */}
     
     <SectionTitle heading="Don't miss" subHeading="TODAY'S OFFER"></SectionTitle>
     <MenuCategory items={todayOffer}></MenuCategory>
      {/* desert section  */}
      <MenuCategory items={dessert} img={dessertImg} title={'Dessert'}></MenuCategory>
      {/* pizza section  */}
      <MenuCategory items={pizza} img={pizzaImg} title={'pizza'}></MenuCategory>
      {/* salad section  */}
      <MenuCategory items={salad} img={saladImg} title={'salad'}></MenuCategory>
      {/* soup section  */}
      <MenuCategory items={soup} img={soupImg} title={'soup'}></MenuCategory>
    </>
  );
};

export default Menu;
