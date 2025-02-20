import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Results from "../pages/Results"
import Test from "../pages/Test"
import Profile from "../pages/Profile"




const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
)
}


export default Router