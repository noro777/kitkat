import React from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import {changeColorMode} from './../../../store/contact-reducer'

class ContactFormContainer extends React.Component{
    componentDidMount(){
        this.props.changeColorMode(this.props.colorMode)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.color !== this.props.colorMode){
            this.props.changeColorMode(this.props.colorMode)
        }

    }


    render(){
        return <ContactForm {...this.props} changeColorMode={this.props.changeColorMode} />
    }
}



const mapStateToProps = (state) => {
    return {
        colorMode: state.service.colorMode
    }
}

export default connect(mapStateToProps, {changeColorMode})(ContactFormContainer)