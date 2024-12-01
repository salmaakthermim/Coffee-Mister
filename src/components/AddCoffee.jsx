import React from 'react';
import Nabvar from './Nabvar';
import Swal from 'sweetalert2'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId)
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Sueecssfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div>
            <Nabvar></Nabvar>
            <div className='p-16 w-10/12 mx-auto bg-[#F4F3F0] mt-10 '>
                <div className=''>
                    <Link to={'/'}><h1 className='flex items-center gap-2'><FaArrowLeft /> Back to home</h1></Link>
                    <h1 className='text-center text-2xl font-Rancho'>Add New Coffee</h1>
                    <p className='text-center text-gray-500'>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div>
                        <div className='flex mb-4 mt-5'>
                            <div className='form-control md:w-1/2'>
                                <label className='label'>
                                    <span className='label-text'>Coffee Name</span>
                                </label>
                                <label className='input-group'>
                                    <input type="text" name='name' placeholder='Enter coffee name' className='input input-bordered w-full' />
                                </label>
                            </div>

                            <div className='form-control md:w-1/2 ml-4'>
                                <label className='label'>
                                    <span className='label-text'>chef</span>
                                </label>
                                <label className='input-group'>
                                    <input type="text" name='chef' placeholder='Enter coffee chef' className='input input-bordered w-full' />
                                </label>
                            </div>
                        </div>


                        <div className='flex mb-4'>
                            <div className='form-control md:w-1/2'>
                                <label className='label'>
                                    <span className='label-text'>supplier</span>
                                </label>
                                <label className='input-group'>
                                    <input type="text" name='supplier' placeholder='Enter coffee supplier' className='input input-bordered w-full' />
                                </label>
                            </div>

                            <div className='form-control md:w-1/2 ml-4'>
                                <label className='label'>
                                    <span className='label-text'>taste</span>
                                </label>
                                <label className='input-group'>
                                    <input type="text" name='taste' placeholder='Enter coffee taste' className='input input-bordered w-full' />
                                </label>
                            </div>
                        </div>


                        <div className='flex'>
                            <div className='form-control md:w-1/2 mb-4'>
                                <label className='label'>
                                    <span className='label-text'>category</span>
                                </label>
                                <label className='input-group'>
                                    <input type="text" name='category' placeholder='Enter coffee category' className='input input-bordered w-full' />
                                </label>
                            </div>

                            <div className='form-control md:w-1/2 ml-4 mb-5'>
                                <label className='label'>
                                    <span className='label-text'>details</span>
                                </label>
                                <label className='input-group'>
                                    <input type="text" name='details' placeholder='Enter coffee details' className='input input-bordered w-full' />
                                </label>
                            </div>
                        </div>
                    </div>
                    <span>Photo</span>
                            <div >
                                <input type="text" placeholder="Enter photo URL" name='photo' className="input input-bordered w-full  mt-3" />
                            </div>
                            <input type="submit" value="Add Coffee" className='btn btn-block bg-[#D2B48C] mt-4 font-Rancho text-2xl' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;