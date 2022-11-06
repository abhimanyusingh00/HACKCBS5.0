import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Services() {
  return (
    <div>
       <Navbar/>
       <h1 class="heading"> our <span class="expert">services</span> </h1>
<section class="services" id="services">



<div class="box-container">

    <div class="box">
        <i class="fas fa-notes-medical"></i>
        <h3>free checkups</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        <a href="/" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-ambulance"></i>
        <h3>24/7 ambulance</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        <a href="/" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-user-md"></i>
        <h3>expert doctors</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        <a href="/" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-pills"></i>
        <h3>medicines</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        <a href="/" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-procedures"></i>
        <h3>bed facility</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        <a href="/" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-heartbeat"></i>
        <h3>total care</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
        <a href="/" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

</div>

</section>
{/* <Footer/> */}
    </div>
  )
}

export default Services