import React from 'react';
import Nabvar from '../Nabvar';
import Coffee from '../Coffee';
import { Outlet, useLoaderData } from 'react-router-dom';

const HomeLayout = () => {
   
    return (
        <div>
            
            <Nabvar></Nabvar>

               <Coffee></Coffee>
            <Outlet></Outlet>
           
         
        </div>
    );
};

export default HomeLayout;