import React, { useState, useContext } from "react"
import AuthForm from "./AuthForm.js"
import { UserContext } from "../context/UserProvider.js"

const initInputs = { username: "", password: ""}

export default function App(){
  const [ inputs, setInputs] = useState(initInputs)
  const [ toggle, setToggle] = useState(false)

  const { signup, login } = useContext(UserContext)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup()
  }

  function handleLogin(e){
    e.preventDefault()
    login()
  }
  return(
    <div className="auth-container">
      <h1>Todo App</h1>
      {!toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Signup" 
          />
          <p onClick={() => setToggle(prev => !prev)}>Already a Member?</p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login" 
          />
          <p onClick={() => setToggle(prev => !prev)}>Not a Member?</p>
        </>
      }
    </div>
  )
}