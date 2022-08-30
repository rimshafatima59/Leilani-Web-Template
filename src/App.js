import React from "react"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router,  Switch } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <>
      
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          
        </Switch>
      </Router>
    </>
  )
}

export default App