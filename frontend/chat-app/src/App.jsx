import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const Router = createBrowserRouter(
  [
    {path: "/", element: <HomePage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/signup", element: <SignupPage/>},
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
