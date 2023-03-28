import React from 'react'
import "./Register.css"
const Register = () => {
  return (
    <>

      <div id="container" style={{ height: "100vh" }}>
        <div id="cover">
          <h1 class="sign-up">Hello, Friend!</h1>
          <p class="sign-up">Enter your personal details<br /> and start a journey with us</p>
          <a class="button sign-up" href="#cover">Sign 1</a>
          <h1 class="sign-in">Welcome Back!</h1>
          <p class="sign-in">To keep connected with us please<br /> login with your personal info</p>
          <br />
          <a class="button sub sign-in" href="#login">Sign 2</a>
        </div>
        <div id="login">
          <h1>Sign In</h1>
          <form>
            <input type="email" placeholder="Email" autocomplete="off" /><br />
            <input type="password" placeholder="Password" autocomplete="off" /><br />
            <a id="forgot-pass" href="#">Forgot your password?</a><br />
            <input class="submit-btn" type="submit" value="Sign In" />
          </form>
        </div>
        <div id="register">
          <h1>Create Account</h1>
          <p> Use your email for registration:</p>
          <form>
            <input type="text" placeholder="Name" autocomplete="off" /><br />
            <input type="text" placeholder="Last Name" autocomplete="off" /><br />
            <input type="email" placeholder="Email" autocomplete="off" /><br />
            <input type="password" placeholder="Password" autocomplete="off" /><br />
            {/* <label>Profile Image : <input type="file" placeholder="Image" autocomplete="off" /></label><br /> */}
            <input type="text" placeholder="School" autocomplete="off" /><br />
            {/* <label>
              Diploma :
              <select>
                <option>National</option>
                <option>IGCSE</option>
                <option>American</option>
              </select>
            </label> */}
            <br />
            <input class="submit-btn" type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register