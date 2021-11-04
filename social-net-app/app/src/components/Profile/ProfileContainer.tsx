import React from 'react'
import Profile from "./Profile"
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer"
import {connect} from "react-redux"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux"
import {AppStateType} from "../../redux/redux-store"
import {ProfileType} from "../../types/types"

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile:(userId: number) => void
    getStatus:(userId: number) => void
    savePhoto:(file: File) => void
    saveProfile:(profile: ProfileType) => Promise<any>
    updateStatus:(status: string) => void
}

type PathParamsType = {
    userId: string
}
type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;         /*подхватываем данные о других пользователях*/
        if (!userId) {                                       /*если нет userId, то*/
            userId = this.props.authorizedUserid;
            if (!userId) {
                // todo: may be replace push with Redirect??
                this.props.history.push("/login")
            }
        }
        if (!userId){
            console.error("ID should exists in URI params or in state('authorizedUserId')")
        } else {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <Profile {...this.props}
                     status={this.props.status}
                     profile={this.props.profile}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserid: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, savePhoto, saveProfile, updateStatus}),
    withRouter
)(ProfileContainer)

