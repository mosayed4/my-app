import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Routes/Home";
import Contcant from "./Routes/Contcant";
import About from "./Routes/About";
import Login from "./Routes/Login";
import Menu from "./Routes/Menu";
import Pages from "./Routes/Pages";
import Registration from "./Routes/Registration";
import Booking from "./Routes/Booking";
import NavMenu from "./components/menu/NavMenu";
import New from "./Routes/New";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/contcant" element={<Contcant/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/menu" element={<Menu/>} >
                     <Route path=':1' element={<New/>} /> {/*A nested route!*/}
                    <Route path=':postId' element={<NavMenu/>} /> {/*A nested route!*/}
                    </Route>

        <Route path="/pages" element={<Pages/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/booking" element={<Booking/>} />
        

      </Routes>
    </div>
  );
}

export default App;
