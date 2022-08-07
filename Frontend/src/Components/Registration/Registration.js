import React from "react";
import axios from "axios";
import * as Components from "./RegComponentStyle";
import './Registration.css'

const Registration = () =>{
    const [signIn, toggle] = React.useState(true);

    const onSignUp = () =>{
        const userNameValue = document.getElementById("signup-username").value;
        const emailValue = document.getElementById("signup-email").value;
        const passwordValue = document.getElementById("signup-password").value;
        var date = new Date();
        console.log('username',userNameValue)
        axios
        .post('http://127.0.0.1:5000/SignUp ',
        {  userName: userNameValue, 
           email: emailValue,
           password: passwordValue,
           createdAt: date.toDateString()+"  "+String(date.getHours())+":"+String(date.getMinutes())+":"+String(date.getSeconds()),
           imageURL: "No URL",
        })
        .then( (response) => {
            if(response.status === 200)
            {
                 window.alert("Sign Up success")
            }else{
                window.alert("Sign Up Failed")
            }
          });
    }

    const onSignIn = async () => {
        const emailValue = await document.getElementById("signin-email").value;
        const passwordValue = await document.getElementById("signin-password").value;
    
        axios.post('http://127.0.0.1:5000/SignIn ',
        { 
          email: emailValue, 
          password: passwordValue,
        } )
        .then((response) => 
        {
            console.log('SignIn',response)
            if( response.data === 'failed'){
                // LogInFailAlert();
            }else{
                localStorage.setItem('UID',response.data['UID']);
                localStorage.setItem('UName',response.data['UName']);
                localStorage.setItem('URole',response.data['URole']);
                localStorage.setItem('accessToken',response.data['token']);
                window.location = "/posts";     
            }   
        }
        );
    }

  return (
    <div className="registration-container">
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" id="signup-username"/>
            <Components.Input type="email" placeholder="Email" id="signup-email"/>
            <Components.Input type="password" placeholder="Password" id="signup-password"/>
            <Components.Button onClick={onSignUp}>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" id='signin-email'/>
            <Components.Input type="password" placeholder="Password" id='signin-password'/>
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button onClick={onSignIn}>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Registration