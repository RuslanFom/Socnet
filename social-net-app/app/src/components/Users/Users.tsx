import Paginator from "../common/Paginator/Paginator"
import User from "./User"
import {UserType} from "../../types/types"
import {FC} from "react"

type PropsType = {
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}

let Users: FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                                     key={u.id}/>)
            }
        </div>
    </div>
}

export default Users