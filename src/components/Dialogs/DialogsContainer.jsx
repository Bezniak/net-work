import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapState = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

export const DialogsContainer = connect(mapState, {updateNewMessageBody, sendMessage})(Dialogs)