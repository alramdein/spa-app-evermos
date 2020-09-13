import React, { Component } from "react";
import axios from "axios";

import {
  Route,
  HashRouter,
} from "react-router-dom";

import FilmographyDetail from "../components/templates/FilmographyDetail"
import FilmographyList from "../components/templates/FilmographyList"

import moviePoster from "../assets/no-img.png"


class Filmography extends Component {
  state = {
    movies: []
  }
  async componentDidMount(){
    const apiUrl = 'https://ghibliapi.herokuapp.com/films'
    try {
      const resp = await axios.get(apiUrl)
      const movies = resp.data
      this.setState({
        movies: movies
      })
    } catch(err) {
      console.error(err)
    }
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