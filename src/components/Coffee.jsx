import React, { useEffect, useState } from 'react';

import CoffeeCard from './CoffeeCard';
import { Link, useLoaderData } from 'react-router-dom';

const Coffee = ({loadedCoffees}) => {

   
    
    const [coffees, setCoffees] = useState([])
    useEffect(() =>{ fetch('http://localhost:5000/coffee')
    .then(data=> data.json()) 
    .then(result=>setCoffees(result))
})
    

    return (
        <div>
            <div className='m-20'>
                <h1 className='text-4xl text-center font-bold'>Our Popular Products</h1>
               <Link to={'/addCoffee'}> <button className='bg-[#D2B48C] ml-96 px-3 py-2 text-white font-Rancho'>Add Coffee</button></Link>
                <div className='grid md:grid-cols-2 gap-4 py-10'>
                    {
                        coffees.map(coffee => <CoffeeCard 
                            key={coffee._id} 
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                            ></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Coffee;
