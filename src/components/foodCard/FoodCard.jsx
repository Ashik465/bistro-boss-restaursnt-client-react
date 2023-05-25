const FoodCard = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Food Image"
          />
          <p className="absolute  right-0  bg-slate-900 text-white top-4 px-4 mr-4"> ${price} </p>
        </figure>
        <div className="card-body flex flex-col  items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="uppercase btn btn-outline border-0 border-b-4 mt-5 mb-10 bg-slate-100  border-orange-400">Add to Card</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
