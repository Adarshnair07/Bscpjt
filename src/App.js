// import Transferdata from "./Components/Transferdata";
// import Login from "./Components/Login";
// import Course from "./Components/Course/Course";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Logindata from "./Components/Logindata";
import Course from "./Components/Course/Course";
import Home from "./Components/Home/Home";
import Book from "./Components/Book/Book";
import Bookview from "./Components/Book/Bookview";
import Products from "./Components/Products/Products";
import Productsview from "./Components/Products/Productsview";
import React, { useEffect, useState } from "react";
function App() {
  const[isloggedin,setIsloggedin] =useState(false);
useEffect(()=>{
  const storevalue=localStorage.getItem("isloggedin");
  if(storevalue==='1')
  {
    setIsloggedin(true);
  }
},{})

  const Logincheck=(un,pwd)=>{
    localStorage.setItem("isloggedin",'1')
    setIsloggedin(true);
  }
  const LogOutcheck=(event) =>{
    localStorage.setItem("isloggedin",'1')
    setIsloggedin(false);
  }
  return (
    <div>

      <React.Fragment>
        {!isloggedin &&<Login checkLogin={Logincheck}/>}

        {isloggedin &&<Home checkLogout={LogOutcheck}/>}
      </React.Fragment>
      {/* <Transferdata username="abc" password="xyz" usertype="admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}
     
     <BrowserRouter>
        <Routes>
          {/* <Route path={'/'} element={<Login />}></Route> */}
          <Route path={'/Ldata'} element={<Logindata/>}></Route>
          <Route path={'/Course'} element={<Course />}></Route>
          {/* <Route path={'/Home'} element={<Home/>}></Route> */}
          <Route path={'/Book'} element={<Book/>}></Route>
          <Route path={'/Bookview'} element={<Bookview/>}></Route>
          <Route path={'/Products'} element={<Products/>}></Route>
          <Route path={'/Productsview'} element={<Productsview/>}></Route>



 
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
