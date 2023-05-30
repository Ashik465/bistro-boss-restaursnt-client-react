import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image,_id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart();

  // handle add to cart

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const orderItem = {menuItemId:_id, email:user.email,name,image,price}
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch() // refetch cart data
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added to cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You need to login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login" , {state: { from: location}});
        }
      });
    }
  };

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Food Image" />
          <p className="absolute  right-0  bg-slate-900 text-white top-4 px-4 mr-4">
            {" "}
            ${price}{" "}
          </p>
        </figure>
        <div className="card-body flex flex-col  items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="uppercase btn btn-outline border-0 border-b-4 mt-5 mb-10 bg-slate-100  border-orange-400"
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
