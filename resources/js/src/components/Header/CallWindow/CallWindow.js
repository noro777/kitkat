import React, { useEffect, useRef } from "react";
import { useState } from "react";
import './CallWindow.scss';
import './CallWindow.responsive.scss';
import theme from '../../../styles/theme';
import $ from 'jquery';
// import jQuery from "jquery";
import Logo from './../../../static/images/Header/logo/logo.png'
import {Box, Button, Grid, Link, Typography, Select, TextField,MenuItem, InputLabel} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
// import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import phoneIcon from '../../../static/images/Header/call-window/phoneIcon.svg';
import viberIcon from '../../../static/images/Header/call-window/viberIcon.svg';
import telegramIcon from '../../../static/images/Header/call-window/telegramIcon.svg';
import whatsappIcon from '../../../static/images/Header/call-window/whatsappIcon.svg';
import Assistant from '../../../static/images/Header/call-window/assistant.png';
import { callWindowToggleAC } from "../../../store/header-reducer";
import axios from 'axios';


function CallWindow( {status} ){

    const [dated,setDated] = useState(false)
    const [showStatus, setShowStatus] = useState(false)
    const dates = useRef([])
    const callWindow = useRef(null)
    const telInp = useRef()
    const [phoneState, setPhoneState] = useState(15151)
    const navigate = useNavigate()
     
    // closing the window 
     function closeCallWindow(){
         setShowStatus(false)
         callWindowToggleAC(false)
     }
    
    //  making call data for sending to server 
     const orderCall = (event) => {
      event.preventDefault()
      const data =   new FormData(event.currentTarget)
      var date = data.get("date")
      var fullName = data.get("fullName")
      var number = `+${phoneState}`
      const callOrder = {
         date,
         fullName,
         number
     }
    }

    // function clickPhoneCall(event){
      //  event.preventDefault()
       
    // }

    // function callByViber() {
    //   navigate("viber://chat?number=+37498459635")
    // }

    useEffect(() => {
      setShowStatus(status)
    }, [status])

          // making dates select options   
    useEffect(() => { 
      const date = new Date()
      var day = date.getDate()
      var hour = date.getHours()
      var month = date.getMonth()
      for(let i = 0;i < 24;i++){
        if(hour === 23){
          hour = 0
          day += 1
        }
        else{
          hour += 1;
        }
        var point = `${hour}:00/${day}/${month}`
        dates.current.push(point)
        console.log(dates.current);
        setDated(true)
      }
  }, [])

  // responsive changes 
  useEffect(() => {
    if(showStatus){
    var screenWidth = window.innerWidth
    if(screenWidth < 500){
        console.log('small');
        console.log("loaded");
        var phoneButton = $("#phone_call_button_link")
        var viberButton = $("#viber_call_button_link")
        var whatsappButton = $("#whatsapp_call_button_link")
        var telegramButton = $("#telegram_call_button_link")
        var orderCallForm = $("#order_call_form")
        var content1 = $("#callWindow_sub_1")
        var content2 = $("#callWindow_sub_2")
        console.log(phoneButton,telegramButton,content1);
        content1.empty()
        content1.append(phoneButton, viberButton, whatsappButton, telegramButton, orderCallForm)
        content2.empty()
        phoneButton.css({"height":"10%"})
        viberButton.css({"height":"10%"})
        whatsappButton.css({"height":"10%"})
        telegramButton.css({"height":"10%"})
        orderCallForm.css({"height":"50%"})
        content2.css({"display":"none","width":"0"})
    }  

    window.addEventListener("resize", () => {
      if(screenWidth < 500){
        console.log('small');
          var phoneButton = $("#phone_call_button_link")
          var viberButton = $("#viber_call_button_link")
          var whatsappButton = $("#whatsapp_call_button_link")
          var telegramButton = $("#telegram_call_button_link")
          var orderCallForm = $("#order_call_form")
          var content1 = $("#callWindow_sub_1")
          var content2 = $("#callWindow_sub_2")
          content1.empty()
          content1.append(phoneButton, viberButton, whatsappButton, telegramButton, orderCallForm)
          phoneButton.css({"height":"10%"})
          viberButton.css({"height":"10%"})
          whatsappButton.css({"height":"10%"})
          telegramButton.css({"height":"10%"})
          orderCallForm.css({"height":"50%"})
          content2.css({"display":"none","width":"0"})
      }  
      else if(screenWidth > 500){
        console.log("big");
        var phoneButton = $("#phone_call_button_link")
        var viberButton = $("#viber_call_button_link")
        var whatsappButton = $("#whatsapp_call_button_link")
        var telegramButton = $("#telegram_call_button_link")
        var orderCallForm = $("#order_call_form")
        var content1 = $("#callWindow_sub_1")
        var content2 = $("#callWindow_sub_2")
        var assistantImage = $("#assistant_img_containeer")
        content1.empty()
        content2.empty()
        content1.append(phoneButton, viberButton, orderCallForm)
        content2.append(whatsappButton, telegramButton, assistantImage)
        phoneButton.css({"height":"13%"})
        viberButton.css({"height":"13%"})
        whatsappButton.css({"height":"13%"})
        telegramButton.css({"height":"13%"})
        orderCallForm.css({"height":"66%"})
    }
    })
    var demo = document.querySelector("#demo")
    $(window).on("click", (event) => {
       if(event.target === demo){
        setShowStatus(false)
        callWindowToggleAC(false)
       }
    })
   }
  }, [showStatus])

    return(
     <>
      {(showStatus) ? 
       // demo container
       <Box
       width="100%"
       height="100%"
       id="demo"
       position="fixed"
       sx={{backgroundColor:theme.palette.underline.main,opacity:"0.9",zIndex:"2",display:"flex",alignItems:"center",justifyContent:"center"}}>
         {/* CallWindow */}
        <Box
        width="600px"
        height="500px"
        id="callWindow"
        ref={callWindow}
        display="flex"
        sx={{backgroundColor:theme.palette.background.dark,transition:"0.5s",position:"relative",zIndex:2,flexDirection:"column",alignItems:"center",p:2,borderRadius:"10px",boxShadow:1}}>
           <Grid
            container
            id="title_container"
            width="25%"
            height="40px"
            >
                <Grid
                item
                display="flex"
                sx={{justifyContent:"center",alignItems:"center"}}
                >
                  <img
                   src={Logo}
                   ></img>
                </Grid>
                <Grid 
                 item
                 display="flex"
                 sx={{justifyContent:"center",alignItems:"center",padding:"0 10px"}}
                 >
                   <Typography
                    variant="h6"
                    color={"white"}
                    >
                        Global IT
                    </Typography>
                </Grid>
            </Grid>
            <Box 
             id="close_callWindow_container"
             position="absolute"
             onClick={closeCallWindow}
             sx={{top:"15px", right:"15px",cursor:"pointer"}}
            >
               <CancelIcon
                sx={{fontSize:"20px",color:"white","&:hover":{color:theme.palette.underline.main}}} />
            </Box>
            {/* callWindow content */}
            <Box
            id="callWindow_content"
            width="80%"
            height="80%"
            sx={{mt:3,display:"flex",justifyContent:"space-between"}}>
                <Box
                 width="47%"
                 height="100%"
                 id="callWindow_sub_1"
                 display="flex"
                 sx={{flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}
                 >
                  <Link
                  id="phone_call_button_link"
                  target="_blank"
                  href="tel:+374 98 459 635"
                  sx={{height:"13%",width:"100%"}}>
                   <button
                     id="phone_call_button"
                    //  onClick={clickPhoneCall}
                     className="call_button"
                     
                    >
                     <img 
                       src={phoneIcon}
                       className="button_icon">
                       </img>
                          +374 98 459 635
                     </button>
                   </Link>
                   <Link
                     id="viber_call_button_link"
                     target="_blank"
                     href="viber://chat?number=+37498459635"
                     sx={{height:"13%",width:"100%"}}
                     >
                    <button
                      id="viber_call_button"
                      className="call_button"
                      // onClick={callByViber}
                     >
                      <img 
                        src={viberIcon}
                        className="button_icon">
                       </img>
                         +374 98 459 635
                    </button>
                   </Link>
                   <form
                    id="order_call_form"
                    onSubmit={orderCall}
                    style={{flexDirection:"column",display:"flex",height:"66%",width:"100%",justifyContent:"space-between"}}
                    >
                      <input
                        id="name_surname_input"
                        type="text"
                        name="fullName"
                        required
                        placeholder="Անուն Ազգանուն"
                        style={{width:"100%",backgroundColor:theme.palette.underline.main,borderRadius:"15px",height:"20%",color:"white",padding:"15px",boxSizing:"border-box"}}
                        />
                       <select
                        placeholder="Օր/Ժամ"
                        id=""
                        name="date"
                        defaultValue={"Օր/Ժամ"}
                        style={{backgroundColor:theme.palette.underline.main,color:"white",borderRadius:"15px",height:"20%",padding:"0px 12px"}}
                        >
                          <option
                          value={"Օր/Ժամ"}>
                            Օր/Ժամ
                          </option>
                          {(dated) ?
                          dates.current.map((date, index) => (
                            <option>
                               {date}
                            </option>
                          ))
                            : null
                          }
                       </select>
                        <PhoneInput 
                          ref={telInp}
                          disableElevation={true}
                          id="phoneInput"
                          required
                          name="phone"
                          country={"am"}
                          onChange={phone => setPhoneState(phone)}
                         inputStyle={{
                           backgroundColor:"red",
                           width:"100%",
                           height:"100%",
                           borderRadius:"15px",
                           backgroundColor:theme.palette.underline.main,
                           color:"white",
                         }}
                         buttonStyle={{
                          backgroundColor:"red",
                          backgroundColor:theme.palette.underline.main,
                          width:"20%",
                          borderRadius:"15px",
                          ":hover":{
                            backgroundColor:theme.palette.underline.main,
                            width:"20%",
                            borderRadius:"15px",
                          }
                         }}
                         containerStyle={{
                           width:"100%",
                           height:"20%",
                           borderRadius:"15px",
                           backgroundColor:"green"
                         }}
                         dropdownStyle={{
                          backgroundColor:theme.palette.underline.main,
                         }}
                        />
                        <button
                        className="call_button"
                        id="order_call_button"
                        type="submit"
                        >
                           Պատվիրել Զանգ
                        </button>
                    </form>
                </Box>
                <Box
                 width="47%"
                 height="100%"
                 id="callWindow_sub_2"
                 sx={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}
                 >  
                  <Link
                     id="whatsapp_call_button_link"
                     href="https://wa.me/37498459635"
                     target="_blank"
                     sx={{height:"13%",width:'100%'}}
                     >
                   <button
                     id="whatsapp_call_button"
                     className="call_button"
                    >
                     <img 
                       src={whatsappIcon}
                       className="button_icon">
                       </img>
                          +374 98 459 635
                   </button>
                  </Link>
                  <Link
                     id="telegram_call_button_link"
                     href="https://t.me/globalitcenter"
                     sx={{height:"13%",width:"100%"}}
                     >
                   <button
                     id="telegram_call_button"
                     className="call_button"
                    >
                     <img 
                       src={telegramIcon}
                       className="button_icon">
                       </img>
                          +374 98 459 635
                   </button>
                  </Link>
                   <Box 
                    id="assistant_img_containeer"
                    sx={{wdidth:"100%",height:"66%",padding:"10px",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <img src={Assistant}
                      style={{width:"70%",height:"90%"}}
                      />
                   </Box>
                 </Box>
            </Box>
         </Box>
        </Box>
        : null}
     </>
    )
}

export default CallWindow