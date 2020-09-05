import React, { Component } from "react";
import '../styles.scss'

import {
    Route,
    NavLink,
    HashRouter,
    Redirect
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import People from "./People";
import Filmography from "./Filmography";
import About from "./About"; 
import logo from "../assets/logo-ghibli-movie-library_2.png"; 

class Main extends Component {
  constructor(props) {
      super(props) 
      this.handleClick = this.handleClick.bind(this)
  }

  state = {
    navClass: "nav__links"    
  }

  handleClick() {
    if(this.state.navClass === "nav__links") {
        this.setState({
            navClass: "nav__links responsive"
        }) 
    } else {
        this.setState({
            navClass: "nav__links"
        }) 
    }
  }

  render() {
    return (
        <HashRouter>
            <div className="main">
                <div className="header">
                    <img src={logo} alt="logo ghibli movie library"></img>
                    <ul className={this.state.navClass}>
                        <li><NavLink className="nav__item" to="/filmography">Filmography</NavLink></li>
                        <li><NavLink className="nav__item" to="/people">People</NavLink></li>
                        <li><NavLink className="nav__item" to="/about">About</NavLink></li>
                    </ul>
                    <FontAwesomeIcon onClick={this.handleClick} color="white" className="icon-bars" icon={faBars} size="lg"/>
                </div>
                <div className="content" id="content">
                    <Route exact path="/">
                        <Redirect to="/filmography"/>
                    </Route>
                    <Route path="/filmography" component={Filmography}/>
                    {/* <Route path="/filmography/detail" component={FilmographyDetail}/> */}
                    <Route path="/people" component={People}/>
                    <Route path="/about" component={About}/>
                </div>
                <div className="footer">
                    <p>Created by Alif Ramdani</p>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;