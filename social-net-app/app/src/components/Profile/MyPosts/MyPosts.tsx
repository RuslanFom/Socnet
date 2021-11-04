import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {InjectedFormProps, reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../../../utils/validators/validators"
import {createField, GetStringKeys, Textarea} from "../../common/FormsControls/FormsControls"
import {PostsType} from "../../../types/types"

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}
export type MapPropsType = {
    posts: Array<PostsType>
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props => {
    let postsElements =
        [...props.posts]
            .map(p => <Post key={p.id} message={p.message}
                                   likesCount={p.likesCount}/>)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const MyPostsMemo = React.memo(MyPosts)

const maxLength200 = maxLengthCreator(200)

export type AddPostFormValuesType = {
    newPostText: string
}

type PropsType ={}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

let AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>("Post message", "newPostText", [required, maxLength200], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPostsMemo







/*
Для классовой компоненты для оптимизации используем:
shouldComponentUpdate(nextProps, nextState) {
   return nextProps != this.props || nextState != this.state;

Для функциональной: React.memo()
}*/