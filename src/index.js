import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter as Router } from "react-router-dom"
import UserProvider from "../context/UserProvider.js"

ReactDOM.render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
  ,
  document.getElementById("root")
)