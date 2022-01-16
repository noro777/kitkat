import React, { useState, useRef, useEffect } from "react";
import './../EdCenter/EdCenter.scss';
import Logo from './../../../../../static/images/Header/logo/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import Friend from '../../../../../static/images/SignUp/friend.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useKeypress from 'react-use-keypress';
import axios from "axios";

function Partner(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    const [headmaster,setHeadmaster] = useState("")
    const [mail,setMail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [purpose,setPurpose] = useState("")
    const [password,setPassword] = useState("")
    const [passwordR,setPasswordR] = useState("")
    const [signStatus,setSignStatus] = useState("")
    const [imageState,setImageState] = useState(null)
    const [type,setType] = useState(0)
    const [status,setStatus] = useState(0)
    const fileInput = useRef()
    const user = useRef({})

    function newName(event){
        setName(event.target.value)
    }
    
    function newHeadmaster(event){
        setHeadmaster(event.target.value)
    }
    
    function newMail(event){
        setMail(event.target.value)
    }

    function newPhone(event){
        setPhone(event.target.value)
    }

    function newAddress(event){
        setAddress(event.target.value)
    }

    function newPassword(event){
        setPassword(event.target.value)
    }

    function newPasswordR(event){
        setPasswordR(event.target.value)
    }

    function newPurpose(event){
        setPurpose(event.target.value)
    }

    function newStatus(event){
        setStatus(event.target.value)
    }

    useKeypress("Enter" , () => {
        signUp()
    })

    function signUp(){
      
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
        setImageState(event.target.value)
        var fReader = new FileReader();
        fReader.readAsDataURL(input.files[0]);
        fReader.onloadend = function(event){
           var img = document.querySelector(".image")
           img.src = event.target.result
       }
    }


    useEffect(() => {
        if(signStatus === "Հաստատել գրանցումը՞"){
          var inputs = document.querySelectorAll(".sign-up-inp")
          inputs.forEach((elem,index,all) => {
              elem.setAttribute("disabled",true)
          })

        }
    },[signStatus])

    return(
        <div className='sign-cont'>
            <div className="back-cont" onClick={back}>
               <ArrowBackIcon className="back-icon" sx={{color:"white"}}/>
            </div>
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
           <div className="content-div">
               <div className="type-div">
                   <div className="image-div">
                       <div className="white-div">
                       <img className="image" src={Friend}>
                       </img>
                       </div>
                       <label class="custom-file-upload">
                         <input type="file"id="file" ref={fileInput} accept="image/*" onChange={newImage} />
                         Ներբեռնել նկար
                         <ArrowUpwardTwoToneIcon sx={{fontSize:"8px"}} />
                       </label>
                   </div>
                   <div className="type-name-div">
                       <h2 className="name">
                           Գործընկեր
                       </h2>
                   </div>
               </div>
               <input className='sign-up-inp' type="name" placeholder='Ընկերության անվանումը' onChange={newName} name="fullName"  id='name-input'></input>
               <input className='sign-up-inp' type="name" placeholder='Ընկերության տնօրենը'onChange={newHeadmaster} name="headmaster" ></input>
               <input className='sign-up-inp' type="tell" placeholder='Ընկերության հեռախոսահամարը' onChange={newPhone} name="phone" ></input>
               <input className='sign-up-inp' type="email" placeholder='Ընկերության էլ․ փոստը'onChange={newMail} name="email" ></input>
               <input className='sign-up-inp' type="adress" placeholder='Ընկերության հասցեն'onChange={newAddress} name="address"></input>
               <select className="sign-up-inp" onChange={newStatus}>
                   <option value={0}>Ընկերության կարգավիճակը</option>
                   <option value={"Պետական"}>Պետական</option>
                   <option value={"Ոչ պետական"}>Ոչ պետական</option>
                   <option value={"Միջազգային"}>Միջազգային</option>
               </select>
               <input className='sign-up-inp' placeholder='Ընկերության նպատակը' name="purpose" maxLength={30} onChange={newPurpose}></input>
               <input className='sign-up-inp'  placeholder='Գաղտնաբառ' name="password" onChange={newPassword} id='name-surname-input'></input>
               <input className='sign-up-inp'  placeholder='Գաղտնաբառի կրկնություն' onChange={newPasswordR} name="password" id='name-surname-input'></input>
               <button className="sign-up-but" onClick={signUp}>Գրանցվել</button>
               <p style={{fontSize:"13px"}}>
               {signStatus}
               </p>
           </div>

        </div>
    )
}

export default Partner