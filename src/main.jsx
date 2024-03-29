import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import Medicines from './pages/medicines'
import { RouterProvider } from "react-router"
import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"/medicine",
    element:<Medicines/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
