import React, { Component } from "react";

import {
  Route,
  HashRouter,
} from "react-router-dom";

import { 
  Col,
  Card,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import FilmographyDetail from "./FilmographyDetail"
import FilmographyList from "./FilmographyList"

import moviePoster from "../assets/no-img.png"

class Filmography extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      selectedMovie: ''
    }
    
    this.handleClick = this.handleClick.bind(this)
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
  
  handleClick(movie) {
    this.setState({
      selectedMovie: movie
    })
    this.props.history.push('/filmography/detail');
  }

  render() {
    var movieItems = []
     
    for(const movie of this.state.movies){
      movieItems.push(
              <Col key={movie.id} xs="12" sm="12" md="4" xl="4" className="card-list">
                <Card style={{color: "#1b1e31"}}> 
                  <Card.Img variant="top" src={moviePoster} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Subtitle>
                      <FontAwesomeIcon color="#FFDF00" icon={faStar} /> 
                      <div className="movie-info">
                        <p>{movie.rt_score} | <span>{movie.release_date}</span></p>
                      </div>
                      <div>
                      </div>
                    </Card.Subtitle>
                    <Card.Text className="cut-text">
                      {movie.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.handleClick(movie)}>See detail</Button>
                  </Card.Body>
                </Card>
              </Col>
      )
    }
     
    return (
        <HashRouter>
            <Route exact path="/filmography">
              <FilmographyList 
                movieItems={movieItems}
              />
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