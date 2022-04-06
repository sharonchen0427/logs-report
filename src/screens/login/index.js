import {useRef, useState} from "react";

function Login() {
    const usernameInputRef = useRef()
    const passwordInputRef = useRef()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUserName = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`/token?username=${username}&password=${password}`)
    }

    return (
        <>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    ref={usernameInputRef}
                    value={username}
                    onChange={handleUserName}
                /><br/>
                <input
                    type="text"
                    id="password"
                    ref={passwordInputRef}
                    value={password}
                    onChange={handlePassword}
                /><br/>
                <button
                    type="submit"
                    style={{width: '100px'}}
                >Submit
                </button>
            </form>
        </>
    );
}

export default Login;