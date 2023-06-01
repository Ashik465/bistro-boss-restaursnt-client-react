import { FaBook, FaCalendar, FaHamburger, FaHome, FaHotdog, FaShoppingCart, FaUser, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const DashBoardLayout = () => {
    const [cart] = useCart()
    const isAdmin = true ;
    return (
        <>
           <div className="drawer drawer-mobile ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center ">
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
      {/* <!-- Sidebar content here --> */}
      { isAdmin? <><li><NavLink to='/dashboard/home'> <FaHome></FaHome> Admin Home</NavLink></li>
      <li><NavLink to='/dashboard/reservation'> <FaUtensils></FaUtensils> Add Item </NavLink></li>
      <li><NavLink to='/dashboard/history'> <FaWallet></FaWallet> Manage Item </NavLink></li>
      <li><NavLink to='/dashboard/history'> <FaBook></FaBook> Manage Bookings</NavLink></li>
      <li><NavLink to='/dashboard/allusers'> <FaUser></FaUser> All User </NavLink></li>

      </> : <><li><NavLink to='/dashboard/home'> <FaUser></FaUser> User Home</NavLink></li>
      <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink></li>
      <li><NavLink to='/dashboard/history'> <FaWallet></FaWallet> Payment history</NavLink></li>
      <li><NavLink to='/dashboard/mycart'> <FaShoppingCart></FaShoppingCart> My cart
      <div className="badge badge-secondary">+{cart?.length | 0 }</div>
       </NavLink></li></>}
      <div className="divider"></div>
      <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
      <li> <NavLink to="/menu"> <FaHamburger></FaHamburger>   Our Menu</NavLink> </li>
      <li> <NavLink to="/order/salad"> <FaHotdog></FaHotdog>   Order food</NavLink></li>
      
    </ul>
  
  </div>
</div> 
        </>
    );
};

export default DashBoardLayout;