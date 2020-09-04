import React, { Component } from "react";
import '../styles.scss'

import {
    Route,
    NavLink,
    HashRouter,
    Redirect
} from "react-router-dom";
  
import People from "./People";
import Filmography from "./Filmography";
import About from "./About"; 
import logo from "../assets/logo-ghibli-movie-library_2.png"; 

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div className="main">
                <div className="header">
                    <img src={logo} alt="logo ghibli movie library"></img>
                    <ul className="nav__links">
                        <li><NavLink className="nav__item" to="/filmography">Filmography</NavLink></li>
                        <li><NavLink className="nav__item" to="/people">People</NavLink></li>
                        <li><NavLink className="nav__item" to="/about">About</NavLink></li>
                    </ul>
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