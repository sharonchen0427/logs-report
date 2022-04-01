function Login() {
    return (
        <>
            <p>Login</p>
            <form>
                <input type="text" name="username" /><br/>
                <input type="password" name="password" /><br/>
                <input type="submit" name="submit"/>
            </form>
        </>
    );
}

export default Login;