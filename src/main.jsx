import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import AddCoffee from './components/AddCoffee';

import HomeLayout from './components/layout/HomeLayout';
import UpdateCoffee from './components/UpdateCoffee';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './providers/AuthProvider';
import Users from './components/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout> ,
    // loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
    
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>
  },
  {
    path: 'signup',
    element: <SignUp></SignUp>
  },
  {
    path: 'users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </StrictMode>
)
