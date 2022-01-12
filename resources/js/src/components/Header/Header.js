import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import {Link, Box, Grid, Select, List, ListItem, MenuItem, Menu, Typography} from '@mui/material';
import "./Header.scss";
import './Header.responsive.scss';
import theme from "../../styles/theme";
import Logo from "./../../static/images/Header/logo/logoAndName.png";
import MenuIcon from '@mui/icons-material/Menu';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch} from 'react-redux';
import CallWindow from "./CallWindow/CallWindow";
import Services from './Services/Services';
import Account from "./Account/Account";
import $ from 'jquery';
import { callWindowToggleAC } from "../../store/header-reducer";
import axios from 'axios';

function Header(data){
    // console.log(data.appToHeader.glxavor)
    let glxavor = data.appToHeader.glxavor


// console.log(data)

    // refs
    const menuDiv2 = useRef(null)
    const menuResp = useRef(false)


    // states
    const [servicesStatus,setServicesStatus] = useState(false)
    const [servicesStatusResp,setServicesStatusResp] = useState(false)
    const [callingWindowStatus, setCallingWindowStatus ] = useState(true)
    const [searchStatus, setSearchStatus] = useState(false)
    const [searchStatusResp, setSearchStatusResp] = useState(false)
    const [accountLarge, setAccountLarge] = useState(false)
    const [accountSmall, setAccountSmall] = useState(false)
    const [facultiesResp,setFacultiesResp] = useState(false)

    // selectors
    const callStatus = useSelector((state) => {
       return state.callWindow.callWindowStatus
    })

    const modeState = useSelector((state) => {
      return state.theme.colorMode
   })


    // toggling search input
    function toggleSearch(){
       if(searchStatus === false){
          $("#search_box").css({"opacity":"1","display":"block","height":"80%"})
          setSearchStatus(true)
          return;
       }
       else{
         $("#search_box").css({"opacity":"0","display":"none","height":"0"})
         setSearchStatus(false)
         return;
       }
    }



    // toggling responsive search input
    function toggleSearchResp(){
      if(searchStatusResp === false){
        $("#search_box_responsive").css({"opacity":"1","display":"block","height":"80%"})
        setSearchStatusResp(true)
     }
     else{
       $("#search_box_responsive").css({"opacity":"0","display":"none","height":"0px"})
       setSearchStatusResp(false)
     }
   }


    // toggling services
    function servicesHover(){
       setServicesStatus(true)
    }





    function servicesMouseLeave(){
      setServicesStatus(false)
    }

    // toggling services responsive
    function toggleServicesResp(){

      if(!servicesStatusResp){
        setServicesStatusResp(true)
        setFacultiesResp(false)
      }
      else if(servicesStatusResp){
        setServicesStatusResp(false)
      }
    }

    // toggling faculties responsive
    function toggleFacultiesResp(){
         if(facultiesResp){
           setFacultiesResp(false)
         }
        else if(!facultiesResp){
          setFacultiesResp(true)
          setServicesStatusResp(false)
        }
     }

    // opening call window
    function openCallWindow(){
      var menuList = $("#menu_list")
       if(!callingWindowStatus){
         setCallingWindowStatus(true)
         menuList.css({display:"none"})
       }
       else if(callingWindowStatus){
         setCallingWindowStatus(false)
         menuList.css({display:"block"})
       }

       callWindowToggleAC(true)
    }


    //  click event forclosing search input
    useEffect(() => {
        window.addEventListener("click", (event)=>{
           var target = event.target
           var searchIcon = document.querySelector("#search_icon")
           var searchIconResp = document.querySelector("#search_responsive_icon")
           var searchInput = document.querySelector("#search_input")
           var searchInputResp = document.querySelector("#search_input_responsive")
           var searchButton = document.querySelector("#search_button")
           var searchButtonResp = document.querySelector("#search_button_responsive")
           if(target === searchIcon || target === searchIconResp || target === searchInputResp || target === searchInput || target === searchButton || target === searchButtonResp){
             return;
           }
           else{
              $("#search_box").css({"opacity":"0","display":"none","height":"0"})
              setSearchStatus(false)
              $("#search_box_responsive").css({"opacity":"0","display":"none","height":"0px"})
              setSearchStatus(false)
           }
       })
    //    axios.get("/loaded").then((resp) => {
    //     // console.log(resp.data);
    //     // alert(resp.data)
    //   })
    }, [])

    // using state selector for call window
    useEffect(() => {
        if(callStatus === false){
           setCallingWindowStatus(false)
           var menuList = $("#menu_list")
           menuList.css({display:"block"})
        }
    }, [callStatus])

    useEffect(() => {
       var facultiesRespCont  = $("#faculties_list_responsive")
       if(facultiesResp){
         facultiesRespCont.css({"opacity":"0.95","z-index":"2"})
       }
       else if(!facultiesResp){
        facultiesRespCont.css({"opacity":"0","z-index":"-1"})
      }
    }, [facultiesResp])

    // load and resize events for responsive changes and styles
    useEffect(() =>{
        var screenWidth = window.innerWidth
        if(screenWidth >= 1000){
          setAccountLarge(true)
          setAccountSmall(false)
          const menuCont = $("#menu_cont");
          const menuDiv1 = $("#menu_container1")
          const menuDiv2 = $("#menu_container2")
          const searchCont = $("#search_cont")
          const menuIcon = $("#menu_icon")
          const menuList = $("#menu_list")
          menuCont.empty()
          menuCont.append(menuDiv1, menuDiv2, searchCont);
          menuCont.css({"width":"14%","margin-right":"15px","margin-left":"0"})
          menuDiv1.css("width","33%")
          menuDiv2.css("width","33%")
          menuResp.current = false
          menuDiv1.on("mouseenter", function(){
            menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
          })
          menuDiv1.on("mouseleave", function(){
             menuList.css({"opacity":"0","z-index":"-1","display":"none"})
          })
           menuList.css({"opacity":"0","z-index":"-1","display":"none"})
           menuResp.current = false
           menuIcon.off()
           menuIcon.off()
         }
         else if(screenWidth < 1000 && window.innerWidth >= 780){
         setAccountLarge(false)
         setAccountSmall(true)
         const menuCont = $("#menu_cont");
         const menuDiv1 = $("#menu_container1")
         const menuDiv2 = $("#menu_container2")
         const searchCont = $("#search_cont")
         const menuIcon = $("#menu_icon")
         const menuList = $("#menu_list")
         console.log(menuCont,menuDiv1,menuDiv2,searchCont);
         menuCont.empty()
         menuCont.append(menuDiv1 , searchCont, menuDiv2);
         menuCont.css({"width":"18%","margin-right":"0","margin-left":"auto"})
         menuDiv1.css("width","33%")
         menuDiv2.css({"width":"33%","display":"flex"})
         searchCont.css("width","33%")
         menuList.css({"opacity":"0","z-index":"-1","display":"none"})
         menuResp.current = false
         menuDiv1.on("mouseenter", function(){
          menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
         })
         menuDiv1.on("mouseleave", function(){
          menuList.css({"opacity":"0","z-index":"-1","display":"none"})
         })
         menuList.css({"opacity":"0","z-index":"-1","display":"none"})
         menuResp.current = false
         menuIcon.off()
         menuIcon.off()
       }
      else if(screenWidth < 780 && screenWidth >= 500){
        setAccountLarge(false)
        setAccountSmall(true)
        const menuCont = $("#menu_cont");
        const menuDiv1 = $("#menu_container1")
        const menuDiv2 = $("#menu_container2")
        const searchCont = $("#search_cont")
        const menuIcon = $("#menu_icon")
        const menuList = $("#menu_list")
        menuCont.empty()
        menuCont.append(searchCont, menuDiv1, menuDiv2);
        menuCont.css({"width":"18%","margin-right":"0","margin-left":"auto"})
        menuDiv1.css("width","50%")
        searchCont.css({"width":"50%","display":"flex"})
        menuDiv2.css("display", "none")
        menuDiv1.on("mouseenter", function(){
          menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
       })
       menuDiv1.on("mouseleave", function(){
          menuList.css({"opacity":"0","z-index":"-1","display":"none"})
       })
        menuList.css({"opacity":"0","z-index":"-1","display":"none"})
        menuResp.current = false
        menuIcon.off()
       }
      else if(screenWidth < 500){
        setAccountLarge(false)
        setAccountSmall(true)
        const menuCont = $("#menu_cont");
        const searchCont = $("#search_cont")
        const menuDiv1 = $("#menu_container1");
        const menuDiv2 = $("#menu_container2");
        const menuIcon = $("#menu_icon")
        menuCont.empty()
        menuCont.append(searchCont, menuDiv1, menuDiv2);
        menuCont.css({"width":"14%","margin-right":"0","margin-left":"auto"})
        menuDiv1.css("width","100%")
        searchCont.css("display","none")
        menuDiv2.css("display", "none")
        menuIcon.on("click",function() {
          const menuList = $("#menu_list")
           if(!menuResp.current){
           menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
           menuResp.current = true
           }
           else if(menuResp.current){
            menuList.css({"opacity":"0","z-index":"-1","display":"none"})
            menuResp.current = false
           }
        })
        menuCont.off()
       }

         window.addEventListener("resize",function() {
            if(window.innerWidth >= 1000){
                setAccountLarge(true)
                setAccountSmall(false)
                const menuCont = $("#menu_cont");
                const menuDiv1 = $("#menu_container1")
                const menuDiv2 = $("#menu_container2")
                const searchCont = $("#search_cont")
                const menuIcon = $("#menu_icon")
                const menuList = $("#menu_list")
                menuCont.empty()
                menuCont.append(menuDiv1, menuDiv2, searchCont);
                menuCont.css({"width":"13%","margin-right":"15px","margin-left":"0"})
                menuDiv1.css("width","33%")
                menuDiv2.css("width","33%")
                menuList.css({"opacity":"0","z-index":"-1","display":"none"})
                menuResp.current = false
                menuDiv1.on("mouseenter", function(){
                  menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
               })
               menuDiv1.on("mouseleave", function(){
                  menuList.css({"opacity":"0","z-index":"-1","display":"none"})
               })
                menuList.css({"opacity":"0","z-index":"-1","display":"none"})
                menuResp.current = false
                menuIcon.off()
            }
            else if(window.innerWidth < 1000 && window.innerWidth >= 780){
              setAccountLarge(false)
              setAccountSmall(true)
              const menuCont = $("#menu_cont");
              const menuDiv1 = $("#menu_container1")
              const menuDiv2 = $("#menu_container2")
              const searchCont = $("#search_cont")
              const menuIcon = $("#menu_icon")
              const menuList = $("#menu_list")
              menuCont.empty()
              menuCont.append(menuDiv1 , searchCont, menuDiv2);
              menuCont.css({"width":"18%","margin-right":"0","margin-left":"auto"})
              menuDiv1.css("width","33%")
              menuDiv2.css({"width":"33%","display":"flex"})
              searchCont.css("width","33%")
              menuList.css({"opacity":"0","z-index":"-1","display":"none"})
              menuResp.current = false
              menuDiv1.on("mouseenter", function(){
                menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
             })
             menuDiv1.on("mouseleave", function(){
                menuList.css({"opacity":"0","z-index":"-1","display":"none"})
             })
              menuList.css({"opacity":"0","z-index":"-1","display":"none"})
              menuResp.current = false
              menuIcon.off()
              menuIcon.off()
            }
            else if(window.innerWidth < 780 && window.innerWidth >= 500){
              setAccountLarge(false)
              setAccountSmall(true)
              const menuCont = $("#menu_cont");
              const menuDiv1 = $("#menu_container1")
              const menuDiv2 = $("#menu_container2")
              const searchCont = $("#search_cont")
              const menuIcon = $("#menu_icon")
              const menuList = $("#menu_list")
              menuCont.empty()
              menuCont.append(searchCont, menuDiv1, menuDiv2);
              menuCont.css({"width":"18%","margin-right":"0","margin-left":"auto"})
              menuDiv1.css("width","50%")
              searchCont.css({"width":"50%","display":"flex"})
              menuDiv2.css("display", "none")
              menuDiv1.on("mouseEnter", function(){
                console.log("function");
                menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
             })
             menuDiv1.on("mouseLeave", function(){
                menuList.css({"opacity":"0","z-index":"-1","display":"none"})
             })
              menuList.css({"opacity":"0","z-index":"-1","display":"none"})
              menuList.css({"opacity":"0","z-index":"-1","display":"none"})
              menuResp.current = false
              menuDiv1.on("mouseenter", function(){
                menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
             })
             menuDiv1.on("mouseleave", function(){
                menuList.css({"opacity":"0","z-index":"-1","display":"none"})
             })
              menuList.css({"opacity":"0","z-index":"-1","display":"none"})
              menuResp.current = false
              menuIcon.off()
              menuIcon.off()
            }
            else if(window.innerWidth < 500){
              setAccountLarge(false)
              setAccountSmall(true)
              const menuCont = $("#menu_cont");
              const searchCont = $("#search_cont")
              const menuDiv1 = $("#menu_container1");
              const menuDiv2 = $("#menu_container2");
              const menuIcon = $("#menu_icon")
              menuCont.empty()
              menuCont.append(searchCont, menuDiv1, menuDiv2);
              menuCont.css({"width":"15%","margin-right":"0","margin-left":"auto"})
              menuDiv1.css("width","100%")
              searchCont.css("display","none")
              menuDiv2.css("display", "none")
              menuIcon.on("click",function() {
                const menuList = $("#menu_list")
                 if(!menuResp.current){
                 menuList.css({"opacity":"0.85","z-index":"2","display":"block"})
                 menuResp.current = true
                 }
                 else if(menuResp.current){
                  menuList.css({"opacity":"0","z-index":"-1","display":"none"})
                  menuResp.current = false
                 }
              })
              menuCont.off()
            }
         })
    }, [])

    return(
       <>
           {/* call window */}
           <CallWindow status={callingWindowStatus} elevation={0}  />
          <Box
          width="100%"
          height="60px"
          sx={{background:theme.palette.header.main}}>
          <Box
           id="header_content"
           width="90%"
           height="100%"
           display="flex"
           sx={{margin:"0 auto",boxSizing:"border-box",alignItems:"center"}}
           >
               {/* logo container  */}
               <Box
                width="225px"
                height="100%"
                display="flex"
                id="logo_box"
                sx={{boxSizing:"border-box",alignItems:"center",justifyContent:"center",mr:"80px"}}
                >
                    <img
                      alt="Global IT"
                      src={Logo}
                      component="img"
                    >
                    </img>
                </Box>
                {/* navigation bar */}
               <Grid
                 id="nav_container"
                 container
                 width="50%"
                 height="100%"
                 sx={{boxSizing:"border-box"}}
                 >
                    <Grid
                     item
                     id="main_large"
                     width="25%"
                     height="100%"
                     display="flex"
                     sx={{justifyContent:"center",alignItems:"center"}}
                     >
                          <Link
                          href="/"
                          id="main_link"
                          underline="none"
                          sx={{color:"white",fontSize:"15px"}}
                          >
                              {/* Գլխավոր */}
                              {glxavor}
                          </Link>
                     </Grid>
                    <Grid
                     item
                     id="faculties_container"
                     width="16%"
                     height="100%"
                     display="flex"
                     sx={{justifyContent:"center",alignItems:"center",position:"relative"}}
                     >
                        <Typography
                         id="faculties_title"
                         variant="p"
                         sx={{fontSize:"15px",color:"white",cursor:"pointer"}}
                         >
                          Ֆակուլտետներ

                         </Typography>
                         {/* faculties hover window  */}
                        <List
                        id="faculties_list"
                         sx={{position:"absolute",display:"none",height:"200%",width:"200%",top:"95%",color:"red",backgroundColor:theme.palette.background.dark,p:2,borderRadius:"15px",opacity:"0",transition:"0.5s",zIndex:"-2"}}
                         >
                           <Link href="/"
                             >
                             <ListItem
                               sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"15px",color:theme.palette.underline.main,height:"30%","&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                 Վեբ Ծրագրավորում
                             </ListItem>
                           </Link>
                           <Link href="/"
                           >
                             <ListItem
                               sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"15px",color:theme.palette.underline.main,height:"30%","&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                  Ծրագրավորում
                             </ListItem>
                           </Link>
                          <Link href="/"
                          >
                            <ListItem
                              sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"15px",color:theme.palette.underline.main,height:"30%","&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                Մուլտիմեդիա
                            </ListItem>
                           </Link>
                        </List>


                    </Grid>

                          <Grid
                          item
                          id="services_large"
                          width="25%"
                          height="100%"
                          display="flex"

                          onMouseEnter={servicesHover}
                          onMouseLeave={servicesMouseLeave}
                          sx={{justifyContent:"center",alignItems:"center",position:"relative",cursor:"pointer"}}
                          >
                            <Link href="/services">
                              <Typography
                              variant="p"
                              id="services_title"
                              sx={{fontSize:"15px",color:"white"}}
                              >
                                  Ծառայություններ
                              </Typography>

                              </Link>
                              {/* services window */}
                              {(servicesStatus) ?
                              <Services />
                              : null}
                          </Grid>



                     <Grid
                     item
                     id="work_large"
                     width="25%"
                     height="100%"
                     display="flex"
                     sx={{justifyContent:"center",alignItems:"center"}}
                     >
                         <Link
                          href="/"
                          underline="none"

                          sx={{color:"white",fontSize:"15px"}}>
                             Աշխատանք
                          </Link>
                     </Grid>
                 </Grid>
                 <Grid
                  container
                  id="menu_cont"
                  width="15%"
                  height="100%"
                  sx={{mr:2}}>
                    {/* menu hover button */}
                   <Grid
                   item
                   id="menu_container1"
                   width="30%"
                   display="flex"
                   position="relative"
                   sx={{alignItems:"center",justifyContent:"center",cursor:"pointer"}}
                   >
                      <MenuIcon
                      id="menu_icon"
                      sx={{fontSize:"20px",color:"white"}}/>
                        {/* menu hover container */}
                       <List
                         id="menu_list"
                         sx={{position:"absolute",transition:"0.5s",height:"200%",width:"600%",top:"95%",color:"red",backgroundColor:theme.palette.background.dark,p:2,borderRadius:"15px"}}
                         >
                            {/* container appearing when responsive */}
                            <Grid
                              height="30%"
                              width="100%"
                              id="responsive_menu_cont"
                              sx={{display:"none"}}
                              container>
                              <Grid
                               item
                               id="grid_search"
                               width="16%"
                               sx={{opacity:"0",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}
                               >
                                   <SearchIcon
                                     id="search_responsive_icon"
                                     onClick={toggleSearchResp}
                                     sx={{color:"white",cursor:"pointer"}} />

                                    <Box
                                     id="search_box_responsive"
                                     position="absolute"
                                     width="500%"
                                     height="50%"
                                     display="none"
                                     sx={{top:"125%",left:"-110%",transition:"0.5s",zIndex:3}}>
                                     <input
                                      id="search_input_responsive"
                                      type="search"
                                      placeholder="Որոնել"
                                      style={{width:"100%",color:"white",height:"100%",borderRadius:"10px",backgroundColor:theme.palette.underline.main,padding:"5px",boxSizing:"border-box",border:"none",outline:"none","::placeholder":{opacity:"0.5"}}}
                                      type="text"
                                     ></input>
                                     <SearchIcon
                                       id="search_button_responsive"
                                       sx={{position:"absolute",right:"5%",top:"35%",fontSize:"20px",color:"white"}}
                                       />
                                    </Box>
                               </Grid>
                               <Grid
                                item
                                width="16%"
                                id="grid_call"
                                sx={{opacity:"0",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}
                                >
                                   <Box
                                    display="flex"
                                    onClick={openCallWindow}
                                    sx={{alignItems:"center",justifyContent:"center",width:"35px",height:"35px",borderRadius:"50%",border:"3px solid rgba(255,255,255,0.5)",backgroundColor:"#3561B5",cursor:"pointer"}}
                                    >
                                      <PhoneInTalkIcon
                                       sx={{fontSize:"15px",color:"white"}}/>
                                    </Box>
                                </Grid>
                               <Grid
                                 width="64%"
                                 sx={{justifySelf:"flex-end"}}
                                item>
                                {(accountSmall) ?
                                //  account component
                                 <Account width={100} height={100} headerToAccaunt={data}/>
                                  : null}
                               </Grid>
                            </Grid>
                               {/* faculties responsive  */}
                              <ListItem
                               id="faculties_responsive"
                               onClick={toggleFacultiesResp}
                               sx={{padding:"10px 0px",display:"none",borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"15px",color:theme.palette.underline.main,height:"12%","&:hover":{borderBottom:`2px solid white`,color:"white",cursor:"pointer"}}}>
                                 Ֆակուլտետներ
                                 <List
                                   id="faculties_list_responsive"
                                   sx={{position:"absolute",height:"450%",border:`1px solid ${theme.palette.background.main}`,width:"70%",left:"-5%",top:"95%",backgroundColor:theme.palette.background.dark,p:2,borderRadius:"15px",opacity:"0",transition:"0.5s",zIndex:"-2"}}

                                  >
                                   <Link href="/"
                                    >
                                     <ListItem
                                       sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"13px",color:theme.palette.underline.main,height:"30%","&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                       Վեբ Ծրագրավորում
                                    </ListItem>
                                   </Link>
                                   <Link href="/"
                                   >
                                     <ListItem
                                     sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"13px",color:theme.palette.underline.main,height:"30%","&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                       Ծրագրավորում
                                     </ListItem>
                                  </Link>
                                  <Link href="/"
                                   >
                                    <ListItem
                                     sx={{borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"13px",color:theme.palette.underline.main,height:"30%","&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                       Մուլտիմեդիա
                                    </ListItem>
                                  </Link>
                                </List>
                              </ListItem>


                              <ListItem
                               id="services_responsive"
                               onClick={toggleServicesResp}
                               sx={{padding:"5px 10px",display:"none",borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"15px",color:theme.palette.underline.main,height:"12%","&:hover":{borderBottom:`2px solid white`,color:"white",cursor:"pointer"}}}>
                                 Ծառայություններ
                                 {(servicesStatusResp) ?
                                 <Services />
                                 : null}
                             </ListItem>

                            <Link
                               href="/"
                             >
                             <ListItem
                               id="news_listitem"
                               sx={{padding:"5px 10px",borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"15px",color:theme.palette.underline.main,height:"50%","&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                 Նորություններ/ առաջարկներ
                             </ListItem>
                           </Link>
                           <Link
                              href="/contacts"
                           >
                             <ListItem

                               id="contact_listitem"
                               sx={{padding:"5px 10px",borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"15px",color:theme.palette.underline.main,height:"50%","&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                  Կապ
                             </ListItem>
                           </Link>
                           <Link
                              href="/"
                              id="responsive_work"
                              sx={{display:"none"}}
                           >
                             {/* work responsive */}
                             <ListItem
                               id="work_listitem"
                               sx={{padding:"5px 10px",borderBottom:`2px solid ${theme.palette.underline.main}`,fontSize:"15px",height:"30%",color:theme.palette.underline.main,"&:hover":{borderBottom:`2px solid white`,color:"white"}}}>
                                  Աշխատանք
                             </ListItem>
                           </Link>
                        </List>
                   </Grid>
                   {/* call button container  */}
                   <Grid
                    item
                    ref={menuDiv2}
                    id="menu_container2"
                    width="30%"
                    display="flex"
                    sx={{alignItems:"center",justifyContent:"center"}}
                   >
                      <Box
                       display="flex"
                       onClick={openCallWindow}
                       sx={{alignItems:"center",justifyContent:"center",width:"35px",height:"35px",borderRadius:"50%",border:"3px solid rgba(255,255,255,0.5)",backgroundColor:"#3561B5",cursor:"pointer"}}
                      >
                        <PhoneInTalkIcon
                         sx={{fontSize:"15px",color:"white"}}/>
                      </Box>
                   </Grid>
                   {/* search button container */}
                   <Grid
                   item
                   width="30%"
                   id="search_cont"
                    height="100%"
                    sx={{display:"flex",alignItems:"center",marginLeft:"auto",justifyContent:"center",position:"relative"}}
                    >
                     <SearchIcon
                     onClick={toggleSearch}
                     id="search_icon"
                     sx={{color:"white",cursor:"pointer"}} />

                      {/* search input */}
                     <Box
                      display="none"
                      id="search_box"
                      position="absolute"
                      width="400%"
                      height="80%"
                      sx={{top:"125%",opacity:0,transition:"0.5s"}}>
                        <input
                          type="search"
                          id="search_input"
                          placeholder="Որոնել"
                          style={{width:"100%",height:"100%",borderRadius:"10px",backgroundColor:theme.palette.underline.main,padding:"5px",boxSizing:"border-box",border:"none",outline:"none","::placeholder":{opacity:"0.5"}}}
                          type="text"
                        ></input>
                        <SearchIcon
                          id="search_button"
                          sx={{position:"absolute",right:"5%",top:"25%",fontSize:"20px",color:"white"}}
                        />
                     </Box>
                    </Grid>
                 </Grid>
                 {/* account component */}
                 {(accountLarge) ?
                 <Account width={16} height={100} headerToAccaunt={data}/>
                 : null }
           </Box>
       </Box>
       </>
    )
}

export default Header
