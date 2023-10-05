import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Route/Route.jsx'
import UserContext from './Pages/Context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
    </UserContext>
  </React.StrictMode>,
)
