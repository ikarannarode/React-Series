import React, { useState, useContext } from 'react'
import UserContext from "../context/userContext"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username, password);


    }
    return (

        <div>
            <br />
            <input type="text" name=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="" placeholder='Username' />

            <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="" id="" placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
            <br />
        </div>

    )
}

export default Login;