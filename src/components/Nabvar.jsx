import React from 'react';
import Logo from "../assets/images/icons/1.png"
import { Link } from 'react-router-dom';


const Nabvar = () => {
   
    return (
        <div className='flex justify-between bg-yellow-900 items-center'>
            <div>

            </div>
            <div className=' gap-4 h-16 flex justify-center items-center'>
                <img className='h-14' src={Logo} alt="" />
                <h1 className='text-white text-3xl font-Rancho py-3'>Espresso Emporium</h1>
            </div>
            <div>
               <Link to={'/signin'}> <button className='btn mr-2'>SignIn</button></Link>
               <Link to={'/users'}><button className='btn mr-3'>Users</button></Link>
            </div>

           
        </div>
    );
};

export default Nabvar;