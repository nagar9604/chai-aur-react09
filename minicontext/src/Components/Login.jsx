import React,{useState,useContext} from 'react'
import UserContetx from '../Context/Usercontext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContetx)

    const handlesubmit=(e)=>{
      e.preventDefault()
      setUser({username,password})
    }
  return (
    <div>
        <h2>LOGIN</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        {" "}
        <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>{" "}
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login