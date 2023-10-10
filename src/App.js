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
function App() {
  return (
    <div>
      {/* <Transferdata username="abc" password="xyz" usertype="admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}
     
     <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/Ldata'} element={<Logindata/>}></Route>
          <Route path={'/Course'} element={<Course />}></Route>
          <Route path={'/Home'} element={<Home/>}></Route>
          <Route path={'/Book'} element={<Book/>}></Route>
          <Route path={'/Bookview'} element={<Bookview/>}></Route>

 
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
