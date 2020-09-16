import React, { Component } from "react";

import {
  Route,
  HashRouter,
} from "react-router-dom";

import FilmographyDetail from "../components/templates/FilmographyDetail"
import FilmographyList from "../components/templates/FilmographyList"

class Filmography extends Component {
  render() {
    return (
        <HashRouter>
            <Route exact path="/filmography">
                <FilmographyList/>
            </Route>
            <Route exact path="/filmography/detail">
              <FilmographyDetail />
            </Route>
        </HashRouter>
    );
  }
}
 
export default Filmography;