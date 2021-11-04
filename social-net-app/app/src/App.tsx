import React, {Suspense} from 'react'
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import {connect, Provider} from "react-redux"
import {compose} from "redux"
import {initializeApp} from "./redux/app-reducer"
import Preloader from "./components/common/Preloader/Preloader"
import store, {AppStateType} from "./redux/redux-store"
import HeaderContainer from "./components/Header/HeaderContainer"
/*import News from "./components/News/News"
import TestTasks from "./components/TestTasks/TestTasks"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import LoginPage from "./components/Login/Login"*/

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const News = React.lazy(() => import("./components/News/News"))
const TestTasks = React.lazy(() => import("./components/TestTasks/testTasks"))
const Settings = React.lazy(() => import("./components/Settings/Settings"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const LoginPage = React.lazy(() => import("./components/Login/Login"))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp()
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
                    <Switch>
                        <Suspense fallback={<Preloader/>}>
                            <Redirect from="/" to="/profile" />
                            <Route path='/login'
                                   render={() => <LoginPage/>}/>
                            <Route path='/dialogs'
                                   render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>                  {/*":userId?" - для уточнения опционального параметра и указания "?" что он не обязательный*/}
                            <Route path='/users'
                                   render={() => <UsersContainer pageTitle={"Самураи"}/>}/>
                            <Route path='/testTasks'
                                   render={() => <TestTasks/>}/>
                            <Route path='/news'
                                   render={() => <News/>}/>
                            <Route path='/settings'
                                   render={() => <Settings/>}/>
                        </Suspense>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})


let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


const SocialJsApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialJsApp