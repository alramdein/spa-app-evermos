import React, { Component } from "react";
import axios from "axios";

import { 
  Container,
  Row,
  Col,
  Dropdown
} from "react-bootstrap";

import FilmCard from "../organisms/FilmCard/filmCard"
import moviePoster from "../../assets/no-img.png"

import "./filmography.scss"

class Filmography extends Component {
  constructor(props) {
    super(props)
    this.sortMovie = this.sortMovie.bind(this)
  }
  state = {
    movies: [],
    dropdownVal: 'Default'
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

  sortMovie(sortBy, dropdownVal) {
    switch(sortBy) {
      case "byRatingAsc": {
        const sortedMovies = this.state.movies.sort((a, b) => b.rt_score - a.rt_score)
        this.setState({
          movies: sortedMovies,
          dropdownVal: dropdownVal
        })
        break
      }
      case "byRatingDesc": {
        const sortedMovies = this.state.movies.sort((a, b) => a.rt_score - b.rt_score)
        this.setState({
          movies: sortedMovies,
          dropdownVal: dropdownVal
        })
        break
      }
      case "byYearAsc": {
        const sortedMovies = this.state.movies.sort((a, b) => b.release_date - a.release_date)
        this.setState({
          movies: sortedMovies,
          dropdownVal: dropdownVal
        })
        break
      }
      case "byYearDesc": {
        const sortedMovies = this.state.movies.sort((a, b) => a.release_date - b.release_date)
        this.setState({
          movies: sortedMovies,
          dropdownVal: dropdownVal
        })
        break
      }
    }
  }

  render() {
    let movieItems = []
    for(const movie of this.state.movies){
      movieItems.push(
        <Col key={movie.id} xs="12" sm="12" md="4" xl="4" className="card-list">
          <FilmCard movie={movie} moviePoster={moviePoster}/>
        </Col>
      )
    }

    return (
        <Container>
          <Row className="filmography-header">
            <Col md="6" sm="12">
              <div className="title-page">
                <h2>Filmography</h2>
                <p>Here it is the list of Ghibli Movies</p>
              </div>
            </Col>
            <Col md="6" sm="12">
              <Dropdown className="dropdown">
              <p>Sorty By:</p>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.dropdownVal}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onSelect={() => this.sortMovie("byRatingAsc", "Rating ascending")} >Rating ascending</Dropdown.Item>
                    <Dropdown.Item onSelect={() => this.sortMovie("byRatingDesc", "Rating descending")}>Rating descending</Dropdown.Item>
                    <Dropdown.Item onSelect={() => this.sortMovie("byYearAsc", "Year ascending")}>Year ascending</Dropdown.Item>
                    <Dropdown.Item onSelect={() => this.sortMovie("byYearDesc", "Year descending")}>Year descending</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>  
            </Col>
          </Row> 
            <Row>
                {movieItems}
            </Row>
        </Container>
    );
  }
}
 
export default Filmography;