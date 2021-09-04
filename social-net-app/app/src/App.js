import React, {Suspense} from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
/*import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";*/

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const LoginPage = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader />}>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/> {/*":userId?" - для уточнения опционального параметра и указания "?" что он не обязательный*/}
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                    </Suspense>
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
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialJsApp;