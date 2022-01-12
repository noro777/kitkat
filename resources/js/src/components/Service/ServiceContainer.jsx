import React from "react";
import { connect } from "react-redux";
import { getColor } from "../../store/reselect/theme-reselect";
import { setColorModeAC } from "../../store/theme-color";
import Service from "./Service";

class ServiceContainer extends React.Component{
    componentDidMount(){
        this.props.setColorModeAC(this.props.colorMode)        
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.colorMode !== this.props.colorMode){
            this.props.setColorModeAC(this.props.colorMode)
        }
    }

    render(){
        return <Service {...this.props} setColorModeAC={this.props.setColorModeAC} />
    }

}


const mapStateToProps = (state) => {
    
    return {
        services: state.service.services,
        otherServices: state.service.otherServices,
        colorMode: getColor(state)
    }
}



export default connect(mapStateToProps,{setColorModeAC})(ServiceContainer)