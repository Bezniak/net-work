import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapState = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatch = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    }
}


export const DialogsContainer = connect(mapState, mapDispatch)(Dialogs)