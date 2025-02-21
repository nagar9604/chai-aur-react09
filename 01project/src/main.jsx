import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout'
import Home from './Components/Home'
import LoginPage from './Components/LoginPage'
import RegistrationPage from './Components/RegistrationPage'
import ForgotPassword from './Components/ForgotPassword'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ServiceProvider from './Components/Serviceprovider'
import Customer from './Components/Customer'
import Catagory from './Components/Catagory'
import Subcatagory from './Components/Subcatagory';
import Complain from './Components/Complain';
import Feedback from './Components/Feedback';


// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   childrens: [
//     {path:"",
//     element:<Home/>
//     },
//     {
//     path:'About',
//     element:<About/>
    
//   },
//   {
//     path:'Contact',
//     element:<Contact/>
//   },
//   {
//     path:'user/:userid',
//     element:<User/>
//   }

//   ]
// }])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='serviceprovider' element={<ServiceProvider/>}/>
      <Route path='customer' element={<Customer/>}/>
      <Route path='catagory' element={<Catagory/>}/>
      <Route path='login'    element={<LoginPage/>}/>
      <Route path='registration' element={<RegistrationPage/>}/>
      <Route path='forgot-password'    element={<ForgotPassword/>}/>
      <Route path='subcatagory'    element={<Subcatagory/>}/>
      <Route path='complain'    element={<Complain/>}/>
      <Route path='feedback'    element={<Feedback/>}/>

      
      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
