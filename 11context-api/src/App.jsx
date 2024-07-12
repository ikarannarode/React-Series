import './App.css'
import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from './components/Profile'
function App() {
  return (
    <UserContextProvider>
      <h1 className='text-cyan-800 text-5xl outline-blue-500'>Context API Project</h1>
      <Login />
      <Profile />
    </UserContextProvider >
  )
}
export default App;