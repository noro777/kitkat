import React from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import {setColorModeAC} from './../../../store/theme-color.js'
import { getColor } from "../../../store/reselect/theme-reselect";

class ContactFormContainer extends React.Component{
    componentDidMount(){
        this.props.setColorModeAC(this.props.colorMode)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.color !== this.props.colorMode){
            this.props.setColorModeAC(this.props.colorMode)
        }

    }


    render(){
        return <ContactForm {...this.props} setColorModeAC={this.props.setColorModeAC} />
    }
}



const mapStateToProps = (state) => {
    return {
        colorMode: getColor(state)
    }
}

export default connect(mapStateToProps, {setColorModeAC})(ContactFormContainer)