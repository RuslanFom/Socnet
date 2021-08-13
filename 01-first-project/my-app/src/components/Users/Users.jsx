import React from "react";
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQGbtZlJEjfM5Q/profile-displayphoto-shrink_100_100/0/1597880035630?e=1632960000&v=beta&t=jcf8LEXFFo8zXom0DNOA8Fa7suFdK-HeGOZfCs45KnY',
                    followed: false,
                    fullName: 'Ruslan',
                    status: 'I am a creator',
                    location: {city: 'Modena', country: 'Italy'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGnqOc0VTui-9-4AZsnSKEJccUePppkIFDg&usqp=CAU',
                    followed: true,
                    fullName: 'Olga',
                    status: 'I am a creators wife',
                    location: {city: 'Bologna', country: 'Italy'}
                },
                {
                    id: 3,
                    photoUrl: 'https://roscongress.org/upload/resize_cache/iblock/5db/289_289_2/4305cfc8_fe10_473e_a7d8_24efcdb79c76.jpg',
                    followed: true,
                    fullName: 'Mikhail',
                    status: 'I am a noname',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/d915e566-a577-44f4-a5de-5d44df7f53a1/280x420',
                    followed: false,
                    fullName: 'Inokentyi',
                    status: 'I am a creators friend',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;