import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect(()=>{
       fetch('/public/menu.json')
         .then(res=>res.json())
            .then(data=>{
                
             const popularMenu = data.filter(item=>item.category ==='popular')
                
                setMenu(popularMenu)})



    },[])

    return (
        <>
            <SectionTitle
             
                heading={"Check it out"}
                subHeading={"FROM OUR MENU"}
            
            ></SectionTitle>


            <div className=" grid grid-cols-1 md:grid-cols-2 my-10 gap-4">
                {menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
            </div>
        </>
    );
};

export default PopularMenu;