import { connect } from "react-redux"
import Facultets from "./Facultets"


const FacultetContainer = (props) => {
    return <Facultets {...props} />

}


const mapStateToProps = (state) => {
    return {
        colorMode: state.theme.colorMode,
        box: state.facultets.box
    }
}

export default connect(mapStateToProps, null )(FacultetContainer)