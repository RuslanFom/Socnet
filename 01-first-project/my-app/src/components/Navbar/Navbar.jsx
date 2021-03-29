import React from 'react';
import s from './Navbar.module.css';

//let s = {
//    'nav':'Navbar_nav__xoAEN',
//    'item':'Navbar_item__2rszl'
//    'active' : 'FDFDGDG_active'
//}

let class1 = "item";
let class2 = "active";
// "item active"
let classes = class1 + " " + class2;
let classesNew = `${s.item} ${s.active}`;

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}
export default Navbar;