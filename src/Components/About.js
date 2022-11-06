import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import img2 from '../assets/about img.png'
function About() {
  return (
    <div>
        <Navbar/>
        <h1 class="heading"><span>About</span> us </h1>
<section class="about" id="about">



<div class="row">

    <div class="image">
        <img src={img2}/>
    </div>

    <div class="content">
        <h3>we take care of your healthy life</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

</div>

</section>
{/* <Footer/> */}
    </div>
  )
}

export default About