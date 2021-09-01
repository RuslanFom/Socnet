import React from 'react';
import s from './Post.module.css';
import usersLogo from '../../../../assets/images/usersLogo.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={usersLogo} alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>)

}
export default Post;