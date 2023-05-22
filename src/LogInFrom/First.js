import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import "./First.css"

export default function First() {
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    // const[user, setUser] = useState([])

    function handleRegisterUsernameChange(e) {
        setRegisterUsername(e.target.value)
    }
    function handleRegisterPasswordChange(e) {
        setRegisterPassword(e.target.value)

    }


    function handleLoginUsernameChange(e) {
        setLoginUsername(e.target.value)
    }
    function handleLoginPasswordChange(e) {
        setLoginPassword(e.target.value)

    }

    // useEffect(() => {
    //     sessionStorage.setItem("userdata", JSON.stringify(user))
    // }, [user])

    function handleRegister(e) {
        e.preventDefault()
        // let userData = {
        //     username: registerUsername,
        //     password: registerPassword
        // }
        // setUser([...user, userData])
        sessionStorage.setItem("password", registerPassword)
        sessionStorage.setItem("username", registerUsername)
        console.log("Register successful")
        setRegisterPassword("")
        setRegisterUsername("")
    }

    function handleLogInSubmit(e) {
        e.preventDefault()
        const usernamestorage = sessionStorage.getItem("username")
        const passwordstorage = sessionStorage.getItem("password")
        if (usernamestorage === loginUsername && passwordstorage === loginPassword) {
            console.log("Login successful")
            setLoginPassword("")
            setLoginUsername("")
        }
        else {
            console.log("Invalid username and password")
        }
    }


    return (
        <>
            <div className="container">
                <div className="box1">
                    <h1>Login</h1>
                    <form onSubmit={handleLogInSubmit}>
                        <label > Username</label>
                        <input type="text" placeholder="Enter username" value={loginUsername} onChange={handleLoginUsernameChange}></input><br />
                        <label>Password</label>
                        <input type="password" value={loginPassword} onChange={handleLoginPasswordChange}></input><br />
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className="box2">

                    <h1>Register</h1>
                    <form onSubmit={handleRegister}>
                        <label> Username</label>
                        <input type="text" placeholder="Enter username" value={registerUsername} onChange={handleRegisterUsernameChange} /><br />
                        <label>Password</label>
                        <input type="password" value={registerPassword} onChange={handleRegisterPasswordChange} ></input><br />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </>

    );
}