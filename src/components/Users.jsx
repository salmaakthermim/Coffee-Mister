import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Nabvar from './Nabvar';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handlUserDelete = id =>{
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
            //  

            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    Swal.fire(
                             "Deleted!",
                             "Your Coffee has been deleted.",
                             "success"
                          );
                          const remainingUsers = users.filter(user=> user._id !== id);
                          setUsers(remainingUsers);

                }
            })
            }
          });

    }
    return (
        <div>
            <Nabvar></Nabvar>
            <h1 className='text-3xl'>Users: {users.length} </h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map(user => 
        <tr key={user._id}>
          <th>1</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.createdAt}</td>
          <td>
            <button className='btn'>E</button>
            <button onClick={() => handlUserDelete(user._id)} className='btn'>X</button>
          </td>
        </tr>)
     }
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;