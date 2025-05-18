import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../src/components/Home.jsx'
import About from './components/About.jsx'
import { CiHome } from 'react-icons/ci'

import Alumni from './components/Alumni.jsx'
import Placements from './components/Placements.jsx'
import Recruiters from './components/Recruiters.jsx'
import Students from './components/Students.jsx'
import Enquiry from './components/Enquiry.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element : <Layout/>,
    children: [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      
      
      {
        path : "alumni",
        element : <Alumni/>
      },
      {
        path : "placements",
        element : <Placements/>
      },
      {
        path : "recruiters",
        element : <Recruiters/>
      },
      {
        path : "students",
        element : <Students/>
      },
      {
        path : "enquiry",
        element : <Enquiry/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
