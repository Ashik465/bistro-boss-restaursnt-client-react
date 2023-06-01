import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";




const AllUser = () => {
    const {data: users =[],refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    })
   
// handle make admin
const handleMakeAdmin = (id) => {
    console.log(id)
}


// handle delete
const handleDelete = (user) => {
    console.log(user);
    refetch();
}

    return (
        <>
        <Helmet>
        <title>Bistro Boss | All user</title>
      </Helmet>
            <h2 className="text-center text-3xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

     {
        users.map((user,index) => <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role === 'admin' ? 'admin':
        <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-ghost  bg-orange-600 text-white"><FaUserShield></FaUserShield></button>
        }</td>
        <td><button onClick={()=>handleDelete(user)} className="btn btn-ghost  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
      </tr>  )
     }
      
   
    </tbody>
  </table>
</div>
            
        </>
    );
};

export default AllUser;