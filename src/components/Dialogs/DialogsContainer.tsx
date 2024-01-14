import Dialogs from "./Dialogs.jsx";
import {connect} from "react-redux";
// @ts-ignore
import {actions} from '../../redux/dialogs-reducer.ts'
import {withAuthRedirect} from "../common/hoc/withAuthRedirect";
import {compose} from "redux";
// @ts-ignore
import {AppStateType} from "../../redux/redux-store";
import {InitialDialogsStateType} from "../../redux/dialogs-reducer";


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
    connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapState, {sendMessage: actions.sendMessage}),
    withAuthRedirect
)(Dialogs)