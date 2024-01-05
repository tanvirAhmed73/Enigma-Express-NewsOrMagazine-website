import { Link } from "react-router-dom";
import useAllUsers from "../../../hooks/useAllUsers";
import { MdDeleteSweep } from "react-icons/md";
import useAxiosAdmin from "../../../hooks/useAxiosAdmin";
import axios from "axios";
import Swal from "sweetalert2";
const AllUsers = () => {
  const [savaUser, refetch] = useAllUsers();
  const axiosAdmin = useAxiosAdmin()
  const handleDeleteUser = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosAdmin.delete(`/user/${id}`)
            .then(res =>{
                refetch()
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            })
        }
      });  
  }

  const handleMakeAdmin= (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You want to make him admin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosAdmin.patch(`/user/admin/${id}`)
            .then(res =>{
                if(res.data.matchedCount > 0){
                    refetch()
                      Swal.fire({
                        title: "successfully !",
                        text: "Selected User Is Now Admin.",
                        icon: "success"
                      });
                }
            })
        }
      });  
  }

  return (
    <div>
      <h1 className="text-4xl mb-4 underline font-semibold text-center">
        All Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {savaUser.map((user,index)=>
                <tr key={user._id}>
                    <th>{index+1}</th>
                    <td>{user.email}</td>
                    <td onClick={()=>handleMakeAdmin(user._id)}>
                        {
                            user.role === 'admin' ? 'Admin' : <button className="bg-slate-600 rounded-lg hover:bg-green-600 text-white p-1">User</button>
                        }
                        
                    </td>
                    <td>
                        <Link onClick={()=>handleDeleteUser(user._id)} className='text-2xl text-red-700'><MdDeleteSweep /></Link>
                    </td>
                </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
