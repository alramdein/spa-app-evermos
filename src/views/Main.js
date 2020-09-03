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

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Ghibli Movie Library</h1>
                <ul className="header">
                    <li><NavLink to="/filmography">Filmography</NavLink></li>
                    <li><NavLink to="/people">People</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <div className="content" id="content">
                    <Route exact path="/">
                        <Redirect to="/filmography"/>
                    </Route>
                    <Route path="/filmography" component={Filmography}/>
                    {/* <Route path="/filmography/detail" component={FilmographyDetail}/> */}
                    <Route path="/people" component={People}/>
                    <Route path="/about" component={About}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;