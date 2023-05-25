import FoodCard from "../../../components/foodCard/FoodCard";


const CategoryOrderTab = ({items}) => {
    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-3 my-10 gap-4">
                {items.map(item => <FoodCard item={item} key={item._id}></FoodCard>)}
            </div>  
        </>
    );
};

export default CategoryOrderTab;