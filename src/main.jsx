import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Details from './Components/Details/Details.jsx'
import Home from './Page/Home/Home.jsx'
import Booking from './Components/Booking/Booking.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
  
  },
  {
    path: "/:id",
    element: <Details></Details>,
    loader:({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
  },
  {
    path: "/booking/:id",
    element: <Booking></Booking>,
    loader:({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
   
  </React.StrictMode>,
)
