import React, { useRef, useEffect, useState } from 'react';
import { Grid,Select, MenuItem, Link} from '@mui/material';
import "./Account.scss";
import "./Account.responsive.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArmFlag from './../../../static/images/Header/language-flags/am.jpg'
import BrFlag from './../../../static/images/Header/language-flags/br.jpg'
import RusFlag from './../../../static/images/Header/language-flags/rus.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useSelector , useDispatch, connect} from 'react-redux';
import $ from "jquery";
import {setColorModeAC} from '../../../store/theme-color';
import {getColor} from '../../../store/reselect/theme-reselect';

function Account({ width, height, ...props}){

    const dispatch = useDispatch()
    const [modeState,setModeState] = useState("light")
    const modeStating = useSelector(function(state) {
      return state.modeState
   })

   function sign(){
        dispatch({
          type:"sign",
          payload:true
        })
   }

   useEffect(() => {
    if(localStorage.getItem("colorMode") !== undefined){
      const currentColor = localStorage.getItem("colorMode")
      props.setColorModeAC(currentColor)
    }
    if(!localStorage.getItem("colorMode")){
      localStorage.setItem("colorMode", JSON.stringify(props.colorMode))
    }
    
  }, [props.colorMode])

  const onClick = () => {
    if(localStorage.getItem("colorMode") === "true" | null){
      localStorage.setItem("colorMode", JSON.stringify(false))
      let getTheme =localStorage.getItem("colorMode")
      getTheme = JSON.parse(getTheme)
      props.setColorModeAC(getTheme)
    }else if(localStorage.getItem("colorMode") === "false" | null){
      localStorage.setItem("colorMode", JSON.stringify(true))
      let getTheme =localStorage.getItem("colorMode")
      getTheme = JSON.parse(getTheme)
      props.setColorModeAC(getTheme)
    }
  }
    
    useEffect(() => {
        setModeState(modeStating)
    }, [modeStating])

    useEffect(() => {
      var darkIcon = $("#dark_mode_icon")
      var lightIcon = $("#light_mode_icon")
      if(modeState === "light"){    
        lightIcon.css({display:"block"})
        darkIcon.css({display:"none"})
      }
      else if(modeState === "dark"){
        lightIcon.css({display:"none"})
        darkIcon.css({display:"block"})
      }
    }, [modeState])

    return(
    <Grid
    container
    id="account_cont"
    width={`${width}%`}
    height={`${height}%`}
    sx={{ml:"auto"}}
   >
      {/* account container */}
      <Grid
       item
       id="account_container"
       width="25%"
       height="100%"
       onClick={sign}
       display="flex"
       sx={{alignItems:"center",justifyContent:"center"}}
      >
        <AccountCircleIcon 
         sx={{color:"white", cursor:"pointer"}} />
      </Grid>
       {/* dark-light mode container  */}
      <Grid
       item
       width="25%"
       height="100%"
       id="switch_container"
       display="flex"
       sx={{alignItems:"center",justifyContent:"center"}}
      >
            {props.colorMode === "true" ? <WbIncandescentIcon 
        sx={{color:"yellow",transform:"rotate(180deg)",cursor:"pointer"}}  onClick={onClick}/> 
        :
        <WbIncandescentIcon 
           sx={{color:"black",transform:"rotate(180deg)",cursor:"pointer"}} onClick={onClick}/>
         }
           <LightbulbIcon
            // onClick={toggleMode}
           id="dark_mode_icon"
           sx={{color:"black",cursor:"pointer",display:"none"}}
           />
      </Grid>
      {/* languages select container */}
     <Grid
      item
      width="50%"
      height="100%"
      display="flex"
      sx={{alignItems:"center",justifyContent:"center"}}
      >
        <Select
         id="select"
         variant="filled"
         IconComponent={ () => (<ArrowDropDownIcon sx={{position:"absolute",left:"55%",color:"white"}} />)}
         defaultValue={"Armenian"}
         sx={{outline:"0px solid transparent",width:"100%",height:"100%",border:"0px solid transparent",borderColor:"transparent transparent rgba(0, 0, 0, 0.1) transparent", outline:"0px solid transparent",padding:"0",display:'flex',alignItems:"center",justifyContent:"center",backgroundColor:"inherit"}}
         >
            <MenuItem
             value={"Armenian"}
             sx={{color:"white"}}
             >
             <img
              src={ArmFlag}
              alt="Armenian"
              className="lang_icon"
              style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
              ></img>
              ??????
            </MenuItem>
           <MenuItem
             value={"Russian"}
             sx={{color:"white"}}>
             <img
             src={BrFlag}
             alt="English"
             className="lang_icon"
             style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
             ></img>
             Eng
           </MenuItem>
           <MenuItem
            value="English"
            sx={{color:"white"}}>
             <img
              src={RusFlag}
              alt="Russian"
              className="lang_icon"
              style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
              ></img>
              ????
           </MenuItem>
        </Select>
      </Grid>
    </Grid>
    )
}

const mapStateToProps = (state) => {
  return{
    colorMode: getColor(state)
  }
}


export default connect(mapStateToProps,{setColorModeAC})(Account)

