import React from 'react'

function Login() {
    const formHandler = (e) => {
        e.preventDefault();
        alert("Hello")
    }
    return (
        <>
            <center>
                <input type="text" name="" id="" /><br /><br />
                <input type="password" name="" id="" /><br />
                <button onClick={formHandler}>Submit</button>
            </center>
        </>
    )
}

export default Login