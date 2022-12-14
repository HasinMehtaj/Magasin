import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';


    
const Login = () => {
  let router=useRouter();
    const signUp=()=>{
        router.push('/Signup')
    }

return (
    <div>
      <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <Image src="/Log1.jpg"
          class="img-fluid" alt="Phone image" width={1000} height={1050}/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
         
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

        
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
        
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
          <button type="button" class="btn btn-primary btn-block btn-lg"
                      onClick={signUp}>SignUp</button>
                      <br/>
                      <br/>
          <a class="btn btn-primary btn-lg btn-block"
            role="button" href='https://www.facebook.com/'>
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <br/>
          <br/>
          <a class="btn btn-primary btn-lg btn-block"
            role="button" href="https://mail.google.com/mail/">
            <i class="fab fa-twitter me-2"></i>Continue with Google</a>
          
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login