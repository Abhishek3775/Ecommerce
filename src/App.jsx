import React from 'react'
import Home from './pagess/Home/Home'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Nav from './Components/Navbar/Nav'
import Shop from './pagess/Shop/Shop'
import Cart from './pagess/Cart/Cart'
import Contact from '../../../LvReactRouter/src/components/Contact'
import Footer from './Components/Footer/Footer'
// import Cart from './Components/'

let Router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
      <Nav/>
      <Home/>
      <Footer/>
      </div>
    },

    {
      path:"/Shop",
      element:<div>
      <Nav/>
      <Shop/>
      <Footer/>
      </div>
    },

    {
      path:"/Cart",
      element:<div>
        <Nav/>
        <Cart/>
        <Footer/>
      </div>
    },

    {
      path:"/Contact",
      element:<div>
        <Nav/>
        <Contact/>
        <Footer/>
      </div>
    },

    {
      path:"/Cart",
      element:<div>
        <Nav/>
        <Cart/>
      </div>

    }


   
  ]
)
function App() {
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App

