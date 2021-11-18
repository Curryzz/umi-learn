import {connect} from "dva";
import Menu from "../Menu"

const mapStateToProps = (state) => {
    return{
        loginId:state.loginUser
    }

}

export default connect(mapStateToProps,null)(Menu)