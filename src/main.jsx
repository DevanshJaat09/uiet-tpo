import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../src/components/Home.jsx'
import About from './components/About.jsx'
import { CiHome } from 'react-icons/ci'
import Coaching from './components/Coaching.jsx'
import Events from './components/Events.jsx'
import Resources from './components/Resources.jsx'

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
        path : "coaching",
        element : <Coaching/>
      },
      {
        path : "events",
        element : <Events/>
      },
      {
        path : "resources",
        element : <Resources/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
