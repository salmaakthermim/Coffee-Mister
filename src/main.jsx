import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
    
  },
  {
    path: 'updateCoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
