import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import p1 from '../assets/doc-1.jpg'
import p2 from '../assets/doc-2.jpg'
import p3 from '../assets/doc-3.jpg'
import p4 from '../assets/doc-4.jpg'
import p5 from '../assets/doc-5.jpg'
import p6 from '../assets/doc-6.jpg'

function Doctors() {
  return (
    <div>
       <Navbar/>
       <h1 class="heading"> our <span class="expert">doctors</span></h1>
<section class="doctors" id="doctors">



<div class="box-container">

    <div class="box">
        <img src={p1} alt=""/>
        <h3>john deo</h3>
        <span class="expert">expert doctor</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
    <img src={p2} alt=""/>
        <h3>john deo</h3>
        <span class="expert">expert doctor</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
    <img src={p3} alt=""/>
        <h3>john deo</h3>
        <span class="expert">expert doctor</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
    <img src={p4} alt=""/>
        <h3>john deo</h3>
        <span class="expert">expert doctor</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
    <img src={p5} alt=""/>
        <h3>john deo</h3>
        <span class="expert">expert doctor</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
    <img src={p6} alt=""/>
        <h3>john deo</h3>
        <span class="expert">expert doctor</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

</div>

</section>

{/* <Footer/> */}

    </div>
  )
}

export default Doctors