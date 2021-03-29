import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
    <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://telegraf.com.ua/files/2019/04/p_548388141.jpg" alt=""/>
                Post 1
            </div>
            <div className='item'>
                Post 2
            </div>
            <div className='item'>
                Post 2
            </div>
            <div className='item'>
                Post 2
            </div>
            <div className='item'>
                Post 2
            </div>
            <div className='item'>
                Post 2
            </div>
            <div className='item'>
                Post 2
            </div>
        </div>
    </div>)

}
export default MyPosts;