import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components-1/Layout/Layout'
import Home from './Components-1/HOME/Home'
import About from './Components-1/About/About'
import Contact from './Components-1/Contact/Contact'
import User from './Components-1/User/User'
import Github, { loader } from './Components-1/Github/Github'

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
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={loader}
      path='github'
       element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
