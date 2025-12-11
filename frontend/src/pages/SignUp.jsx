import React from "react";
import SignUpForm from "../components/SignUpForm";
import '../styles/pagesStyle/signupPage.css';


function SignUpPage(){
    return(
        <div className="signupPageWrapper">
            <SignUpForm/>
        </div>
    );
}
export default SignUpPage;