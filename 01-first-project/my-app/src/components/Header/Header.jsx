import React from 'react';
import s from './Header.module.css';
import viking from '../../assets/images/viking.png'

const Header = () => {
    return <header className={s.header}>
        <img src={viking} alt=""/>
    </header>
}
export default Header;