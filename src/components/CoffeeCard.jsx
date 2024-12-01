import React from 'react';
import { FiEye } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
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

            fetch(`http://localhost:5000/coffee/${_id}`, {
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
                          const remaining = coffees.filter(cof=> cof._id !== _id);
                          setCoffees(remaining);

                }
            })
            }
          });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between w-full py-5 pr-3">
                   <div>
                   <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>taste: {taste}</p>
                   </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn join-item text-2xl bg-[#D2B48C] text-white"><FiEye /></button>
                          <Link to={`updateCoffee/${_id}`}>  <button className="btn join-item text-2xl bg-black text-white"><MdEdit /></button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item text-2xl bg-red-500 text-white"><AiTwotoneDelete /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;