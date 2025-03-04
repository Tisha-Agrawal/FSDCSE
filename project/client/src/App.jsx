import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UserProducts from "./pages/UserProducts";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/login";
import Register from "./pages/Register";
import Password from "./pages/Password";
import ChangePassword from "./pages/ChangePassword";
import EditUser from "./pages/EditUser";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import DeleteUser from "./pages/DeleteUser";
import Navbar from "./component/Navbar";

function App() {

  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/adduser" element={<AddUser/>}/>
    <Route path="/UserProducts" element={<UserProducts/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/password" element={<Password/>}/>
    <Route path="/changepassword" element={<ChangePassword/>}/>
    <Route path="/edituser" element={<EditUser/>}/>
    <Route path="/editproduct" element={<EditProduct/>}/>
    <Route path="/deleteproduct" element={<DeleteProduct/>}/>
    <Route path="/deleteuser" element={<DeleteUser/>}/>
    <Route path="/addproduct" element={<AddProduct/>}/>
    
   </Routes>
    </>
  )
}

export default App
