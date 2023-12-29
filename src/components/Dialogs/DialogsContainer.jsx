import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../common/hoc/withAuthRedirect";


const mapState = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapState,
    {updateNewMessageBody, sendMessage})(AuthRedirectComponent)