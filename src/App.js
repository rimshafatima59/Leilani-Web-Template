import React from "react"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home";
import About from "./components/about/About";
// import Footer from "./components/common/footer/Footer";

const App = () => {
  return (
    <>
      
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App