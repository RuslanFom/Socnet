import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;         /*подхватываем данные о других пользователях*/
        if (!userId) {                                       /*если нет userId, то*/
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {
        return (
            <Profile {...this.props} />

        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);              /*withRouter - для того, чтобы принимать информацию с урла*/

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

