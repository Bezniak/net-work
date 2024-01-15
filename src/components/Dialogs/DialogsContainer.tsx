// @ts-ignore
import React from "react";
import {connect} from "react-redux";
// @ts-ignore
import {actions} from '../../redux/dialogs-reducer.ts'
// @ts-ignore
import {withAuthRedirect} from "../common/hoc/withAuthRedirect.tsx";
import {compose} from "redux";
// @ts-ignore
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/dialogs-reducer";
// @ts-ignore
import Dialogs from "./Dialogs.tsx";


type MapStateType = {
    dialogsPage: InitialStateType
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

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapState, {sendMessage: actions.sendMessage}),
    withAuthRedirect
)(Dialogs)