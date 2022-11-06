import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import img from '../assets/doc-removebg-preview.png'
function Login(){
  return (
<div>
 <Navbar/>
 <div class="Form">
<div id="login">
<h3 class="text-center text-white pt-5">Login form</h3>
<div class="container">
    <div id="login-row" class="row justify-content-center align-items-center">
        <section class="home" id="home">
        <div class="ig" >
            <img  class="image" src={img}></img>
        </div>
        <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
                <form id="login-form" class="form" action="" method="post">
                    <h3 class="text-center text-info db">Login</h3>
                    <div class="form-group">
                        <label for="username" class="text-info db">Username:</label><br/>
                        <input type="text" name="username" id="username" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="password" class="text-info db">Password:</label><br/>
                        <input type="text" name="password" id="password" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="remember-me" class="text-info db"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                        <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
                    </div>
                    <div id="register-link" class="text-right">
                        <a href="#" class="text-info db">Register here</a>
                    </div>
                </form>
            </div>
    </div>
    </section>
    </div>
    </div>
    </div>
    </div>
    </div>

  )
  }

export default Login
