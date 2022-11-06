import React from 'react'
import './style.css'
import img1 from '../assets/urban-917.gif'
import Footer from './Footer'
import Navbar from './Navbar'
import tracker from './tracker'
export default function Home() {
  return (    
    <div>

    
    <Navbar/>
    <div>
<section class="home" id="home">

<div class="image">
    <img src={img1}/>
</div>

<div class="content">
    <h3 class="boxes1">stay safe,stay healthy</h3>
    <p class="medcare">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
    <a href="/" class="btn ab"> contact us <span  class="fas fa-chevron-right"></span> </a>
</div>

</section>


<section class="icons-container">

<div class="icons">
    <i class="fas fa-user-md"></i>
    <h3 class="boxes1">140+</h3>
    <p>doctors at work</p>
</div>

<div class="icons">
    <i class="fas fa-users icn"></i>
    <h3 class="boxes1">1040+</h3>
    <p>satisfied patients</p>
</div>

<div class="icons">
    <i class="fas fa-procedures icn"></i>
    <h3 class="boxes1">500+</h3>
    <p>bed facility</p>
</div>

<div class="icons">
    <i class="fas fa-hospital icn"></i>
    <h3 class="boxes1">80+</h3>
    <p>available hospitals</p>
</div>

</section>
<tracker/>
{/* <Footer/> */}
</div>
</div>
  )
}

