
const MenuItem = ({item}) => {

    const {name,price,recipe,image} = item
    return (

        <> 
        
        <div className=" flex space-x-2">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[0px]"  src={image} alt="" /> 
            {/* // img w-[100px] */}
             <div>
                <h3 className=" uppercase">{name}-------</h3>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
        
        </>
       
    );
};

export default MenuItem;