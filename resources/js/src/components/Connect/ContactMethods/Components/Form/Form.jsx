import React,{useState, useEffect} from 'react';
import axios from "axios";
import { useDispatch , useSelector} from 'react-redux';
import { connect } from 'react-redux';
import { getColor } from '../../../../../store/reselect/theme-reselect';
import { setColorModeAC } from '../../../../../store/theme-color';

import './Form.css';

const Form = (props) => {

    const [nameState,setNameState] = useState("")
    const [emailState,setEmailState] = useState("")
    const [textState,setTextState] = useState("")
    const [confirmStatus, setConfirmStatus] = useState("")
    const [statusColor, setStatusColor] = useState("")
    const dispatch = useDispatch()
    // const [styles,setStyles] = useState({})
//     const modeStatus = useSelector(function(state){
//          return state.modeStatus
//    })

//    useEffect(() => {
//       if(modeStatus.modeStatus === "dark"){
//          setStyles(modeTheme.palette.dark)
//      }
//      else if(modeStatus.modeStatus === "light"){
//          setStyles(modeTheme.palette.light)
//          console.log(styles);
//      }
//    }, [modeStatus])


    function changeName(event){
        setNameState(event.target.value)
    }

    function changeEmail(event){
        setEmailState(event.target.value)
    }

    function changeText(event){
        setTextState(event.target.value)
    }

    function submitMessage(event){
       
    }

    return (
        <div>
        {props.colorMode === "true"
        ?
        <form method="post">
        <section className="form">
            <div className="formInfo">
                <div className="formInputFiled filedBlack">
                    <input onChange={changeName} type="text" name="fullName" id="fullName" placeholder="Անուն Ազգանուն" />
                </div>
                <div className="formInputFiled filedBlack">
                    <input type="email" onChange={changeEmail}  name="email" id="email" placeholder="Էլ-փոստ" />
                </div>
            </div>
            <div className="formMessage">
                <div className="formTextFiled filedBlack">
                    <textarea name="message" onChange={changeText} id="message" cols="30" rows="10" placeholder="Հաղորդագրություն"></textarea>
                </div>
                <p id="statusP" style={{color:statusColor}}>
                {confirmStatus}
                </p>
                <input type="submit" onClick={submitMessage} value="Ուղարկել" name="submit" id="submit" className="formSubmit" />
            </div>
        </section>
    </form>
        :
        <form method="post">
        <section className="form">
            <div className="formInfo">
                <div className="formInputFiled filed">
                    <input type="text"  onChange={changeName} name="fullName" id="fullName" placeholder="Անուն Ազգանուն" />
                </div>
                <div className="formInputFiled filed">
                    <input type="email" name="email" onChange={changeEmail}   id="email" placeholder="Էլ-փոստ" />
                </div>
            </div>
            <div className="formMessage">
                <div className="formTextFiled filed">
                    <textarea name="message" id="message" onChange={changeText} cols="30" rows="10" placeholder="Հաղորդագրություն"></textarea>
                </div>
                <p id="statusP" style={{color:statusColor}}>
                {confirmStatus}
                </p>
                <input type="submit" value="Ուղարկել" onClick={submitMessage} name="submit" id="submit" className="formSubmit" />
            </div>
        </section>
    </form>
        }
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        colorMode: getColor(state)
    }
}

export default connect(mapStateToProps, { setColorModeAC })(Form)
