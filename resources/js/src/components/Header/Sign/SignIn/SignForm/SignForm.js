import React, { useState, useEffect, useRef} from 'react';
import './SignForm.scss';
import { FaFacebookF, FaGofore } from 'react-icons/fa';
import { useDispatch , useSelector } from 'react-redux';
import Google from '../../../../../static/images/SignUp/google.png';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

function SignForm(){
   const [logSites, setLogSites] = useState(true)
   const [signMessage,setSignMessage] = useState("")
   const [emailPhone, setEmailPhone] = useState("")
   const [password,setPassword] = useState("")
   const dispatch = useDispatch()
   const googleSign = useRef(null)
   const user = useRef()

   function f(){
        axios.post('/login',{
            "email_or_phone":{emailPhone},
            "password":{password}
        }).then((res)=>{
            console.log(res)
        }).catch(res=>{
            console.log(res.data)
        })
   }

   const signStatus = useSelector(function(state){
       return state.sign
   })

   function newEmailPhone(event){
       console.log("a")
      setEmailPhone(event.target.value)
   }

   function newPassword(event){
       setPassword(event.target.value)
   }

    function responseFacebook(response){
        if(signStatus.sign === "studentIn"){
            var facebookUser = {
                fullName:response.name,
                logedWith:"facebook",
                category:"student",
                facebookID:response.userID
            }
        }
        else if(signStatus.sign === "teacherIn"){
            var facebookUser = {
                fullName:response.name,
                logedWith:"facebook",
                category:"teacher",
                facebookID:response.userID
            }
        }
        else if(signStatus.sign === "guestIn"){
            var facebookUser = {
                fullName:response.name,
                logedWith:"facebook",
                category:"guest",
                facebookID:response.userID
            }
        }
        else if(signStatus.sign === "freelancerIn"){
            var facebookUser = {
                fullName:response.name,
                logedWith:"facebook",
                category:"freelancer",
                facebookID:response.userID
            }
        }
         axios.post("/facebookLog",facebookUser).then((response) => {
             console.log(response.data);
         })
    }

    function responseGoogle(response){
       if(signStatus.sign === "studentIn"){
        var googleUser = {
            fullName:response.yu.nf,
            email:response.yu.nv,
            logedWith:'google',
            category:"student",
        }
       }
       else if(signStatus.sign === "teacherIn"){
        var googleUser = {
            fullName:response.yu.nf,
            email:response.yu.nv,
            logedWith:'google',
            category:"teacher"
        }
    }
    else if(signStatus.sign === "guestIn"){
        var googleUser = {
            fullName:response.yu.nf,
            email:response.yu.nv,
            logedWith:'google',
            category:"guest"
        }
    }
    else if(signStatus.sign === "freelancerIn"){
        var googleUser = {
            fullName:response.yu.nf,
            email:response.yu.nv,
            logedWith:'google',
            category:"freelancer",
        }
    }
    axios.post("/googleLog",googleUser).then((response) => {
        console.log(response.data);
    })
  }

    function back(){
     dispatch({
         type:"sign",
         payload:true
     })
   }

   useEffect(() => {
    var contextCont = document.querySelector(".sign-in-cont")
     if(signStatus.sign === "partnerIn" || signStatus.sign === "edcIn"){
        setLogSites(false)
        contextCont.style = "height:200px"
     }
     else{
        contextCont.style = "height:350px"
         setLogSites(true)
     }
   }, [signStatus])

    return(
        <div className='sign-in-cont'>
            <div className="back-cont" onClick={back}>
               <ArrowBackIcon className="back-icon" sx={{color:"white"}}/>
            </div>
           <input className='sign-in-input' onChange={newEmailPhone} placeholder='Հեռախոսահամար / Էլ․ փոստ' id='email-phone-input'></input>
           <input className='sign-in-input' onChange={newPassword} placeholder='Գաղտնաբառ' id='password-input'></input>
           <button className='sign-in-button' onClick={f}>
               Մուտք
           </button>
           {logSites ?
              <>
               <div className="line-cont">
                   <div className="or-cont">
                       Կամ
                   </div>
               </div>
               <FacebookLogin
                 appId="608662410247935"
                 autoLoad
                 textButton='Մուտք գործել Facebook-ով'
                 cssClass="sign-with-button-facebook"
                 icon={<FaFacebookF className="button-icon"/>}
                 callback={responseFacebook}
                 />
               <GoogleLogin
                 clientId='1013357743209-vmc8c7l9m9qsrs6cdrahe633r9n95tt4.apps.googleusercontent.com'
                 cookiePolicy={'single_host_origin'}
                 onSuccess={responseGoogle}
                 onFailure={responseGoogle}
                 render={renderProps => (
                    <button onClick={renderProps.onClick} className='sign-with-button-google'> <img src={Google} className='button-icon'/>Մուտք գործել Google-ով</button>
                  )}
                />
               </>
               : null}
        </div>

    )
}

export default SignForm
