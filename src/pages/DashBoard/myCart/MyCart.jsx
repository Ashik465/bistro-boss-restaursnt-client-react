import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import {  FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);


 // handle delete
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/${item._id}`, {
                method: "DELETE",
                })
                .then((res) => res.json())
                .then((data) => {
                if (data.deletedCount) {
                    refetch() // refetch cart data
                    Swal.fire(
                    'Deleted!',
                    'Your food item has been deleted.',
                    'success'
                    )
                }
                }
                );
            }
          })
    }

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My cart</title>
      </Helmet>
      <div className=" uppercase flex font-bold gap-10 h-[60px] items-center  justify-evenly">
        <h1 className=" text-3xl">total items {cart.length}</h1>
        <h1 className=" text-3xl">total price ${total}</h1>
        <button className=" btn btn-sm  btn-warning ">Pay</button>
      </div>

      {/* // table start  */}

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food </th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  {item.name} 
                </td>
                <td >${item.price}</td>
                <td>
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
