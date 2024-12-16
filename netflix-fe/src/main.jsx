import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './pages/Landing'
import Browse from './pages/Browse'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/browse",
    element: <Browse />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


