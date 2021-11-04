import Header, {DispatchPropsType, MapPropsType} from "./Header"
import {connect} from "react-redux"
import {logout} from "../../redux/auth-reducer"
import {AppStateType} from "../../redux/redux-store"
import React from "react"


class HeaderContainer extends React.Component<DispatchPropsType & MapPropsType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {logout})(HeaderContainer)