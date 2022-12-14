import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
  <div>
    <img class="wave" src="img/wave.png" />
	<div class="container">
		<div class="img">
			<img src="img/bg.svg" />
		</div>
		<div class="login-content">
			<form action="index.html" >
				<img src="img/avatar.svg" />
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
                      <h5>Enter Your Email </h5>
           		   		<input type="text" class="input" />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input" />
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login" />
            </form>
        </div>
    </div>
  </div>
    
  )
}

export default login