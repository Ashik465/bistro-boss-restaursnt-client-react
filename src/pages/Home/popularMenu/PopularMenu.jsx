
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import Button from "../../../components/Button/Button";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {


    const [menu] = useMenu()

    const popularMenu = menu.filter(item => item.category === 'popular')

  

    return (
        <>
            <SectionTitle
             
                heading={"Check it out"}
                subHeading={"FROM OUR MENU"}
            
            ></SectionTitle>


            <div className=" grid grid-cols-1 md:grid-cols-2 my-10 gap-4">
                {popularMenu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
            </div>
          <Button text='view full Menu'></Button>
        </>
    );
};

export default PopularMenu;