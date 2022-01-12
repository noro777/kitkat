import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getColor } from '../../../../../store/reselect/theme-reselect';
import { setColorModeAC } from '../../../../../store/theme-color';

import './Form.css';


const Form = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setmessage] = useState("");

function Name(event){
    setName(event.target.value)
}
function Email(event){
    setEmail(event.target.value)
}
function Message(event){
    setmessage(event.target.value)
}

function f(e){

    e.preventDefault();
    // console.log(state)
    axios.post('/contact', {
        "name":name,
        "email":email,
        "message":message
    })
       .then(
            response => {
                console.log(response.data)
                alert(response.data)
            }
        )
        .catch(error => {
        console.log("ERROR:: ",error.response.data);

    });
}


    return (
        <div>
        {props.colorMode
        ?
        <form>
        <section className="form">
            <div className="formInfo">
                <div className="formInputFiled filedBlack">
                    <input type="text" name="name" id="fullName" onChange={Name} placeholder="Անուն Ազգանուն" />
                </div>
                <div className="formInputFiled filedBlack">
                    <input type="email" name="email" id="email" onChange={Email} placeholder="Էլ-փոստ" />
                </div>
            </div>
            <div className="formMessage">
                <div className="formTextFiled filedBlack">
                    <textarea name="message" id="message" cols="30" onChange={Message} rows="10" placeholder="Հաղորդագրություն"></textarea>
                </div>
                <input type="submit" onClick={f} value="Ուղարկել" name="submit" id="submit" className="formSubmit" />

            </div>

        </section>
     </form>
        :
        <form>
        <section className="form">
            <div className="formInfo">

                <div className="formInputFiled filed">
                    <input type="text" name="fullName" id="name" onChange={Name} placeholder="Անուն Ազգանուն" />
                </div>
                <div className="formInputFiled filed">
                    <input type="email" name="email" id="email" onChange={Email} placeholder="Էլ-փոստ" />
                </div>
            </div>
            <div className="formMessage">
                <div className="formTextFiled filed">
                    <textarea name="message" id="message" cols="30" rows="10" onChange={Message} placeholder="Հաղորդագրություն"></textarea>
                </div>
                    <input type="submit" onClick={f} value="Ուղարկել" name="submit" id="submit" className="formSubmit" />
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
