import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import About from './About/About'
import LandingPage from './LandingPage/LandingPage'
import Service from './Services/Services'
import Blog from './Plans/Plan'
import ContactUs from './components/HireTutor/HireTutor'



import SignIn from './Tutor/Signin/SignIn'
import TeacherDashboard from './Tutor/Dashboard/TeacherDashboard'
import Price from './Tutor/Price/Price'
import Protected from './Protected/Protected'
import SignUp from './Tutor/SignUp/SignUp'
import Enquiry from './components/Enquiry/Enquiry'
import MasterDashboard from './Master-Dashboard/MasterDasboard'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    




    <Route path='' element={<Layout/>}>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/plans' element={<Blog/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/enquiry' element={<Enquiry/>}/>
    <Route path='/dashboard' element={
     <Protected>
    <TeacherDashboard/>
    </Protected>
    }/>
    <Route path='/price' element={<Price/>}/>
    <Route path='/MD' element={<MasterDashboard/>}/>
    

    </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
