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
import Breakfastt from "./components/menu/Breakfastt";
import Drinks from "./components/menu/Drinks";
import MainDishes from "./components/menu/MainDishes";
import Desserts from "./components/menu/Desserts";
import All from "./components/menu/All";


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
                     <Route path='all' element={<All/>} /> {/*A nested route!*/}
                    <Route path='breakfastt' element={<Breakfastt/>} /> {/*A nested route!*/}
                    <Route path='drinks' element={<Drinks/>} /> {/*A nested route!*/}
                    <Route path='mainDishes' element={<MainDishes/>} /> {/*A nested route!*/}
                    <Route path='desserts' element={<Desserts/>} /> {/*A nested route!*/}
                    </Route>

        <Route path="/pages" element={<Pages/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/booking" element={<Booking/>} />
        

      </Routes>
    </div>
  );
}

export default App;
