import s from './Post.module.css'
import usersLogo from '../../../../assets/images/usersLogo.jpg'
import React from "react"

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={usersLogo} alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>)

}
export default Post