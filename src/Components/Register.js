import React from 'react'
import Navbar from './Navbar'

function Register() {
  return (
    <div>
        <Navbar/>
<nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
<div class="container">
<a class="navbar-brand" href="#">Laravel</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
        </li>
    </ul>

</div>
</div>
</nav>

<main class="my-form"/>
<div class="cotainer">
    <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card">
                    <div class="Form">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <form name="my-form" onsubmit="return validform()" action="success.php" method=""/>
                            <div class="form-group row">
                                <label for="full_name" class="col-md-4 col-form-label text-md-right">Full Name</label>
                                <div class="col-md-6">
                                    <input type="text" id="full_name" class="form-control" name="full-name"/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="text" id="email_address" class="form-control" name="email-address"/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="user_name" class="col-md-4 col-form-label text-md-right">User Name</label>
                                <div class="col-md-6">
                                    <input type="text" id="user_name" class="form-control" name="username"/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="phone_number" class="col-md-4 col-form-label text-md-right">Phone Number</label>
                                <div class="col-md-6">
                                    <input type="text" id="phone_number" class="form-control"/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="present_address" class="col-md-4 col-form-label text-md-right">Present Address</label>
                                <div class="col-md-6">
                                    <input type="text" id="present_address" class="form-control"/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="permanent_address" class="col-md-4 col-form-label text-md-right">Permanent Address</label>
                                <div class="col-md-6">
                                    <input type="text" id="permanent_address" class="form-control" name="permanent-address"/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="nid_number" class="col-md-4 col-form-label text-md-right"><abbr
                                            title="National Id Card">NID</abbr> Number</label>
                                <div class="col-md-6">
                                    <input type="text" id="nid_number" class="form-control" name="nid-number"/>
                                </div>
                            </div>

                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                    Register
                                    </button>
                                </div>
                            </div>
                        <form/>
                    </div>
                </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Register
