import './App.css'
import UserContextProvider from "../src/context/UserContextProvider"
import { Login } from "./components/Login"
import { Profile } from './components/Profile'
function App() {
  return (
    <UserContextProvider>
      <h1 className='text-cyan-800 text-5xl outline-blue-500'>Hello Moto</h1>
      <Login />
      <Profile />
    </UserContextProvider >
  )
}
export default App;