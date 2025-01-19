import React,{useContext} from 'react'
import UserContetx from '../Context/Usercontext'


function Profile() {
    const {user}=useContext(UserContetx)
    if(!user) return <div>Please login!!!</div>

    return <div>Welcome {user.username}</div>
}

export default Profile