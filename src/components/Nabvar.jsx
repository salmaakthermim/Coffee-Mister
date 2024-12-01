import React from 'react';
import Logo from "../assets/images/icons/1.png"


const Nabvar = () => {
   
    return (
        <div>
            <div className='bg-yellow-900 gap-4 h-16 flex justify-center items-center'>
                <img className='h-14' src={Logo} alt="" />
                <h1 className='text-white text-3xl font-Rancho py-3'>Espresso Emporium</h1>
            </div>

           
        </div>
    );
};

export default Nabvar;