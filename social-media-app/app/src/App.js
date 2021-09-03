import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className = 'app-wrapper-content'>
                    <Route path = '/login'
                           render = { () => <LoginPage/> } />
                    <Route path = '/dialogs'
                           render = { () => <DialogsContainer/> } />
                    <Route path = '/profile/:userId?'
                           render = { () => <ProfileContainer/> } />                                 {/*":userId?" - для уточнения опционального параметра и указания "?" что он не обязательный*/}
                    <Route path = '/users'
                           render = { () => <UsersContainer/> } />
                    <Route path = '/music'
                           render = { () => <Music/> } />
                    <Route path = '/news'
                           render = { () => <News/> } />
                    <Route path = '/settings'
                           render = { () => <Settings/> } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const SocialJsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SocialJsApp;