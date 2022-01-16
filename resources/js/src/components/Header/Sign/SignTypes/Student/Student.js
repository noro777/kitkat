import React, { useState, useRef, useEffect } from "react";
import './Student.scss';
import Logo from './../../../../../static/images/Header/logo/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import Stud from '../../../../../static/images/SignUp/student.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useKeypress from 'react-use-keypress';
import axios from 'axios'


function Student(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    const [phoneMail,setPhoneMail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordR,setPasswordR] = useState("")
    const [signStatus,setSignStatus] = useState("")
    const [imageState,setImageState] = useState(null)
    const fileInput = useRef()
    const user = useRef({})

    function newName(event){
        setName(event.target.value)
    }

    function newMailPhone(event){
        setPhoneMail(event.target.value)
    }

    function newPassword(event){
        setPassword(event.target.value)
    }

    function newPasswordR(event){
        setPasswordR(event.target.value)
    }

    useKeypress("Enter" , () => {
        signUp()
    })

    function signUp(e){
        e.preventdefault()
        console.log(e.target.value)

        let data = {
            "name":name,
            "email_or_phone":phoneMail,
            "password":password,
            "password_confirmation":passwordR,
            "image":imageState
        };

        let fd = new FormData()
        fd.append("name", name);
        fd.append("image", imageState);

        console.log(fd.values())
        axios.post('/student/register',fd,{}).then(res=>{
            console.log(res.data)
        }).catch(e=>{
            console.log(e)
            throw e;
        })
    }

    function closeWindow(){
        dispatch({
            type:"sign",
            payload:false
        })
     }

    function back(){
        dispatch({
            type:"sign",
            payload:true
        })
    }

    function newImage(event){
     var input = document.getElementById("file");
     setImageState(event.target.files)
    //  var fReader = new FileReader();
    //  fReader.readAsDataURL(input.files[0]);
    //  fReader.onloadend = function(event){
    //     var img = document.querySelector(".image")
    //     img.src = event.target.result
    // }
    }

    useEffect(() => {
        if(signStatus === "Հաստատել գրանցումը՞"){
          var inputs = document.querySelectorAll(".sign-up-input")
          inputs.forEach((elem,index,all) => {
              elem.setAttribute("disabled",true)
          })

        }
    },[signStatus])

    return(
        <form onClick={signUp}>
            <label class="custom-file-upload">
                <input type="file" id="file" accept="image/*" ref={fileInput} onChange={newImage} />
                Ներբեռնել նկար
                <ArrowUpwardTwoToneIcon sx={{fontSize:"8px"}} />
            </label>
                       <button className="sign-up-but" >Գրանցվել</button>
        </form>


        // <div className='sign-cont'>
        //     <div className="back-cont" onClick={back} >
        //        <ArrowBackIcon className="back-icon" sx={{color:"white"}}/>
        //     </div>
        //     <div className='title-cont'>
        //         <div className='logo-cont'>
        //            <img className='logo' src={Logo}></img>
        //         </div>
        //         <div className='h-cont'>
        //           <h3 className='title'>
        //               Global IT
        //           </h3>
        //         </div>
        //     </div>
        //     <div className='close-cont' onClick={closeWindow}>
        //         <CloseIcon sx={{fontSize:"13px"}} className='close-icon'/>
        //     </div>
        //    <div className="content-up-div">
        //        <div className="type-div">
        //            <div className="image-div">
        //                <div className="white-div">
        //                <img className="image" src={Stud}>
        //                </img>
        //                </div>
        //                <label class="custom-file-upload">
        //                  <input type="file" id="file" accept="image/*" ref={fileInput} onChange={newImage} />
        //                  Ներբեռնել նկար
        //                  <ArrowUpwardTwoToneIcon sx={{fontSize:"8px"}} />
        //                </label>
        //            </div>
        //            <div className="type-name-div">
        //                <h2 className="name">
        //                    Ուսանող
        //                </h2>
        //            </div>
        //        </div>
        //        <input className='sign-up-input' onChange={newName} type="name" placeholder='Անուն ազգանուն' name="fullName"id='name-surname-input'></input>
        //        <input className='sign-up-input' onChange={newMailPhone} type="email" placeholder='Հեռախոսահամար / էլ․ փոստ' name="phoneEmail" id='name-surname-input'></input>
        //        <input className='sign-up-input' onChange={newPassword} placeholder='Գաղտնաբառ' name="password" id='name-surname-input'></input>
        //        <input className='sign-up-input' onChange={newPasswordR} placeholder='Գաղտնաբառի կրկնություն' name="password" id='name-surname-input'></input>
        //         <p style={{fontSize:"13px"}}>{signStatus}</p>
        //        <button className="sign-up-but" onClick={signUp}>Գրանցվել</button>

        //    </div>

        // </div>
    )
}

export default Student
