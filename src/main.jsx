import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Explore from './pages/Explore/Explore.jsx'
import Login from './pages/Login/Login.jsx'
import Getstarted from './pages/Getstarted/Getstarted.jsx'
import Feedback from './Components/Feedback/Feedback.jsx'
import Github from './pages/Github/Github.jsx'
import Resumepage from './pages/Explore/Resumepage/Resumepage.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='React-Learning' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='getstarted' element={<Getstarted/>}/>
      <Route path='feedback' element={<Feedback/>}/>
      <Route path='github' element={<Github/>}/>
      <Route path='resumepage' element={<Resumepage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
