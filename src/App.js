import Home from './Components/Home';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import About from './Components/About';
import Services from './Components/Services';
import Booking from './Components/Booking';
import Doctors from './Components/Doctors';
import Tracker from './Components/tracker';
import Login from './Components/Login';
import Register from './Components/Register';
import React from 'react';
import './App.css';
import { Routes, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <About/> */}
      
      {/* <Footer/> */}
      <Routes>
      <Route path="/" element={<Home />}></Route>{" "}
      
      </Routes>
     
      <Routes>
      <Route path="/" element={<Tracker/> }></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/doctors" element={<Doctors/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
