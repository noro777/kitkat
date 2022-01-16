import React from 'react';
import './SignIn.scss';
import './SignIn.responsive.scss';
import Student from '../../../../static/images/SignUp/student.svg';
import Teacher from '../../../../static/images/SignUp/teacher.svg';
import Guest from '../../../../static/images/SignUp/guest.svg';
import Edu from '../../../../static/images/SignUp/ed.svg';
import Freelancer from '../../../../static/images/SignUp/freelancer.svg';
import Friend from '../../../../static/images/SignUp/friend.svg';
import { useDispatch } from 'react-redux';

function SignIn(){
    
    const dispatch = useDispatch()

    function signStudent(){
       dispatch({
           type:"sign",
           payload:"studentIn"
       })
    }

    function signTeacher(){
        dispatch({
            type:"sign",
            payload:"teacherIn"
        })
     }

     function signGuest(){
        dispatch({
            type:"sign",
            payload:"guestIn"
        })
     }

     function signEdc(){
        dispatch({
            type:"sign",
            payload:"edcIn"
        })
     }

     function signFreelancer(){
        dispatch({
            type:"sign",
            payload:"freelancerIn"
        })
     }

     function signPartner(){
        dispatch({
            type:"sign",
            payload:"partnerIn"
        })
     }
    return(
        <div className='sign-up-cont'>
           <div className='sign-up-title-cont'>
               <h4 className='sign-up-title'>
                   Մուտք գործել որպես՝
               </h4>
            </div>
            <div className='sign-up-types-cont'>
              <div className='sign-up-column' id="sign-up-1">
                <div className='sign-up-button' onClick={signStudent}>
                   <img src={Student} className='sign-up-image'></img>
                   <h5 className='sign-up-type'>
                       Ուսանող
                   </h5>
                </div>
                <div className='sign-up-button' onClick={signTeacher}>
                   <img src={Teacher} className='sign-up-image'></img>
                   <h5 className='sign-up-type'>
                       Ուսուցիչ
                   </h5>
                </div>
                <div className='sign-up-button' onClick={signGuest}>
                   <img src={Guest} className='sign-up-image'></img>
                   <h5 className='sign-up-type'>
                       Հյուր
                   </h5>
                </div>
              </div>
              <div className='sign-up-column' id="sign-up-2">
               <div className='sign-up-button' onClick={signEdc}>
                   <img src={Edu} className='sign-up-image'></img>
                   <h5 className='sign-up-type'>
                       Ուս. <br />Հաստատություն
                   </h5>
                </div>
                <div className='sign-up-button' onClick={signFreelancer}>
                   <img src={Freelancer} className='sign-up-image'></img>
                   <h5 className='sign-up-type'>
                       Ֆրիլանսեր/ <br/>Գործատու
                   </h5>
                </div>
                <div className='sign-up-button' onClick={signPartner}>
                   <img src={Friend} className='sign-up-image'></img>
                   <h5 className='sign-up-type'>
                       Գործընկեր
                   </h5>
                </div>
              </div>
           </div>
        </div>
    )
}

export default SignIn