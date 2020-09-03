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

import FilmographyDetail from "../views/FilmographyDetail"
import FilmographyList from "../views/FilmographyList"

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
    console.log("cek: ")
    console.log(movie)
    this.setState({
      selectedMovie: movie
    })
    this.props.history.push('/filmography/detail');
  }

  render() {
    var movieItems = []
     
    for(const movie of this.state.movies){
      movieItems.push(
              <Col key={movie.id} md="4" className="mt-5">
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Subtitle>
                      <FontAwesomeIcon style={{color: "#FFDF00"}} icon={faStar} /> 
                      <div className="d-inline-flex ml-1">
                        <p>{movie.rt_score}</p>
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
              />
            </Route>
        </HashRouter>
    );
  }
}
 
export default Filmography;