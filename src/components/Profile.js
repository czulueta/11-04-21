import React, { useContext } from "react"
import Todo from "./Todo.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { UserContext } from "./context/UserProvider.js"

export default function Profile(){
  const { username } = useContext(UserContext)
  return(
    <div className="profile">
      <h1>Welcom {username}</h1>
      <h3>Add Todo</h3>
      <TodoForm />
      <h3>Your Todos</h3>
    </div>
  )
}