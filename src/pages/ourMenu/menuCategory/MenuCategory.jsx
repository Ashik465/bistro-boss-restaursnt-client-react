import Button from "../../../components/Button/Button";
import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({items,title,img}) => {
    return (
        <> <div className=" mb-20">
            {title && <Cover img ={img} title={title}></Cover>}
        </div>
         
            <div className=" grid grid-cols-1 md:grid-cols-2 my-10 gap-4">
                {items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
            </div>
          <Button text='Order Your favorite food'></Button>
        </>
    );
};

export default MenuCategory;