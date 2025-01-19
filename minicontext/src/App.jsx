
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContetxProvider from './Context/UserContextProvider'
import UserContetx from './Context/Usercontext'

function App() {
  

  return (
    <UserContetxProvider>
  
     <h1>React with Chai</h1>
     <Login/>
     <Profile/>
    </UserContetxProvider>
  )
}

export default App
