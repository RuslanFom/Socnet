import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";



const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/login' render={ () => <LoginPage /> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer />} />
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />      {/*":userId?" - для уточнения опционального параметра и указания "?" что он не обязательный*/}
                    <Route path='/users' render={ () => <UsersContainer /> } />
                    <Route path='/music' render={ () => <Music /> } />
                    <Route path='/news' render={ () => <News /> } />
                    <Route path='/settings' render={ () => <Settings /> } />
                </div>
            </div>
        );
}


export default App;