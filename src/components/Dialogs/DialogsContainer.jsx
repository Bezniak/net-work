import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../common/hoc/withAuthRedirect";
import {compose} from "redux";


const mapState = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapState, {sendMessage}),
    withAuthRedirect
)(Dialogs)