import React from 'react'
import './style.css'
import Home from './Home';
import Services from './Services';
import About from './About';
import Doctors from './Doctors';
import Booking from './Booking';
import { NavLink } from "react-router-dom";
import { Routes, Route, Link, Switch } from "react-router-dom";

export default function Navbar() {
    return (
<div>
{/* <Routes>
      <Route path="/" element={<Home/>}></Route>{" "}
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/doctors" element={<Doctors/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
      
    </Routes> */}
<header class="header">

<a href="/" class="logo"> <i class="fas fa-heartbeat"></i> <span class="med">MediBuddy</span> </a>
<nav class="navbar">
            <NavLink to="/" className="logo">  Home</NavLink>         
            <NavLink to="/services" className="logo"> Services</NavLink>
           <NavLink to="/about" className="logo">About</NavLink> 
           <NavLink to="/doctors" className="logo">Doctors</NavLink> 
           <NavLink to="/booking" className="logo" >Booking</NavLink>
           <NavLink to="/login" className="logo">Login</NavLink>
           <NavLink to="/register" className="logo"> Register</NavLink>
    

</nav>

<div id="menu-btn" class="fas fa-bars"></div>

</header>
</div>
    )
}