import React from 'react';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;         /*подхватываем данные о других пользователях*/
        if (!userId) {                                       /*если нет userId, то*/
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }


    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);      /*hoc*/

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);              /*withRouter - для того, чтобы принимать информацию с урла*/

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

