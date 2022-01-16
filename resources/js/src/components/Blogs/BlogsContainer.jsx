import { connect } from "react-redux"
import Blogs from "./Blogs"



const BlogsContainer = (props) => {
    return <Blogs {...props} />
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, null)(BlogsContainer)