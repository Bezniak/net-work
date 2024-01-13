import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../common/hoc/withAuthRedirect";
import {compose} from "redux";
// @ts-ignore
import {InitialDialogsStateType, sendMessage} from "../../redux/dialogs-reducer.ts";
import {AppStateType} from "../../redux/redux-store";


type MapStateType = {
    dialogsPage: InitialDialogsStateType
}

type MapDispatchType = {
    sendMessage: (data: string) => void
}

type OwnProps = {}

const mapState = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapState, {sendMessage}),
    withAuthRedirect
)(Dialogs)