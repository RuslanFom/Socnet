import React from 'react';
import s from './Header.module.css';
import viking from '../../assets/images/viking.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src={viking} alt=""/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;