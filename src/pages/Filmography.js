import React, { Component } from "react";

import {
  Route,
  HashRouter,
} from "react-router-dom";

import FilmographyDetail from "../components/templates/FilmographyDetail"
import FilmographyList from "../components/templates/FilmographyList"

import moviePoster from "../assets/no-img.png"


// const {Provider, Consumer} = React.createContext()

class Filmography extends Component {
  state = {
    movies: []
  }
  componentDidMount(){
    const apiUrl = 'https://ghibliapi.herokuapp.com/films'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({
          movies: data
        })
      )
  }

  render() {
    return (
        <HashRouter>
            <Route exact path="/filmography">
                <FilmographyList movies={this.state.movies}/>
            </Route>
            <Route exact path="/filmography/detail">
              <FilmographyDetail 
                selectedMovie={this.state.selectedMovie}
                moviePoster={moviePoster}
              />
            </Route>
        </HashRouter>
    );
  }
}
 
export default Filmography;