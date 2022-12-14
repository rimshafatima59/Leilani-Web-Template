import React from "react"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";

import Features from "./components/Features/Features";
// import Footer from "./components/common/footer/Footer";

import Footer from "./components/common/footer/Footer";
import Partners from "./components/Partners/Partners"



const App = () => {
  return (
    <>
      
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/courses" exact component={CourseHome} />
          <Route path="/team" exact component={Team} />
          <Route path="/Features" exact component={Features} />
          <Route path="/Partners" exact component={Partners} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App