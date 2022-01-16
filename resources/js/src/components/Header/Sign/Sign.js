import React, { useEffect, useRef, useState } from 'react';
import './Sign.scss';
import './Sign.responsive.scss';
import Logo from './../../../static/images/Header/logo/logo.png';
import SignIn from './SignIn/SignIn';
import SignForm from './SignIn/SignForm/SignForm';
import SignUp from './SignUp/SignUp';
import $ from 'jquery';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import Student from './SignTypes/Student/Student';
import Teacher from './SignTypes/Teacher/Teacher';
import Freelancer from './SignTypes/Freelancer/Freelancer'
import Guest from './SignTypes/Guest/Guest'
import EdCenter from './SignTypes/EdCenter/EdCenter';
import Partner from "./SignTypes/Partner/Partner"
import SignSuccess from './SignUp/SignSuccess/SignSuccess';

function Sign(){

    const [signInState,setSignInState] = useState(true)
    const [signUpState,setSignUpState] = useState(false)
    const [signFormState,setSignFormState] = useState(false)
    const signCont = useRef(null)
    const dispatch = useDispatch()
    const sign = useSelector(function(state){
      return state.sign
    })

    function signIn(){
        setSignInState(true)
        setSignUpState(false)
        setSignFormState(false)
    }

    function signUp(){
        setSignInState(false)
        setSignUpState(true)
        setSignFormState(false)
    }

    function closeWindow(){
       dispatch({
           type:"sign",
           payload:false
       })
    }

    useEffect(() => {
        if(signUpState){
           var signUpBorder = $(".sign-up-border")
           var signInBorder = $(".sign-in-border")
           var signUpButton = $("#sign-up-button")
           var signInButton = $("#sign-in-button")
           signUpBorder.css({display:"block"})
           signInBorder.css({display:"none"})
           signUpButton.css({opacity:"1"})
           signInButton.css({opacity:"0.6"})
        }
        if(signInState){
           var signInBorder = $(".sign-in-border")
           var signUpBorder = $(".sign-up-border")
           var signUpButton = $("#sign-up-button")
           var signInButton = $("#sign-in-button")
           signInBorder.css({display:"block"})
           signUpBorder.css({display:"none"})
           signUpButton.css({opacity:"0.6"})
           signInButton.css({opacity:"1"})
        }
    })

    useEffect(() => {
        if((sign.sign === "edc") || (sign.sign === "partner") || (sign.sign === "student") ||
        (sign.sign === "teacher") ||  (sign.sign === "guest") || (sign.sign === "freelancer") ||
        (sign.sign === "signSuccess")){
             signCont.current.style.display = "none"
        }
        else if(typeof(sign.sign) === "object"){
            signCont.current.style.display = "flex"
            setSignInState(true)
            setSignUpState(false)
        }
        else if((sign.sign === "edcIn") || (sign.sign === "partnerIn") || (sign.sign === "studentIn") ||
        (sign.sign === "teacherIn") ||  (sign.sign === "guestIn") || (sign.sign === "freelancerIn")){
            setSignInState(false)
            setSignUpState(false)
            setSignFormState(true)
        }
        else if(sign.sign){
            signCont.current.style.display = "flex"
            if(signFormState){
                setSignFormState(false)
                setSignInState(true)
            }
        }
    }, [sign])

    return(
      <>
      <div className='demo'>
      {(sign.sign === "signSuccess") ?
      <SignSuccess />
      : null}
      {(sign.sign === "student") ?
      <Student />
      : null}
       {(sign.sign === "teacher") ?
      <Teacher />
      : null}
       {(sign.sign === "guest") ?
      <Guest />
      : null}
       {(sign.sign === "freelancer") ?
      <Freelancer />
      : null}
       {(sign.sign === "partner") ?
      <Partner />
      : null}
       {(sign.sign === "edc") ?
      <EdCenter />
      : null}
         <div className='sign-cont' ref={signCont}>
             <div className='title-cont'>
                 <div className='logo-cont'>
                    <img className='logo' src={Logo}></img>
                 </div>
                 <div className='h-cont'>
                   <h3 className='title'>
                       Global IT
                   </h3>
                 </div>
             </div>
             <div className='close-cont' onClick={closeWindow}>
                 <CloseIcon sx={{fontSize:"13px"}}className='close-icon'/>
             </div>
             <div className='buttons-cont'>
                 <div className='button-container' id="sign-up-button" onClick={signUp}>
                    Գրանցվել
                    <div className='sign-up-border'></div>
                 </div>
                 <div className='button-container' id="sign-in-button" onClick={signIn}>
                     Մուտք
                     <div className='sign-in-border'></div>
                 </div>
             </div>
             {signInState ?
             <SignIn />
             : null }
             {signUpState ?
             <SignUp />
             : null }
             {signFormState ?
             <SignForm />
             : null}
         </div>
       </div>
       </>
    )
}

export default Sign
