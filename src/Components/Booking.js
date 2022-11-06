import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import book from '../assets/urban-917.gif';
function Booking() {
  return (
    <div>
         <Navbar/>
         <h1 class="heading"> <span class="expert">book</span> now </h1>   
<section class="book" id="book">

    

    <div class="row">

        <div class="image">
            <img src={book} alt=""/>
        </div>

        <form action="">
            <h3>book appointment</h3>
            <input type="text" placeholder="your name" class="box"/>
            <input type="number" placeholder="your number" class="box"/>
            <input type="email" placeholder="your email" class="box"/>
            <input type="date" class="box"/>
            <input type="submit" value="book now" class="btn expert"/>
        </form>

    </div>

</section>
{/* <Footer/> */}
    </div>
  )
}

export default Booking