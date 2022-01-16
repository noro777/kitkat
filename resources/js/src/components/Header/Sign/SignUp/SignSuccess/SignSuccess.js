import React, { useRef } from 'react';
import './SignSuccess.scss';
import Logo from './../../../../../static/images/Header/logo/logo.png';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

function SignSuccess(){
    const dispatch = useDispatch()
    const signCont = useRef()

    function closeWindow(){
        dispatch({
            type:"sign",
            payload:false
        })
     }
     
     function signIn(){

         dispatch({
             type:"sign",
             payload:{sign:true}
         })
     }

    return(
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
             <div className='sign-success-context'>
                 <h3 className='success'>
                     Հաջող գրանցում !!
                 </h3>
                 <p className='sign-link' onClick={signIn}>
                     Մուտք
                 </p>
             </div>
         </div>
    )
}

export default SignSuccess