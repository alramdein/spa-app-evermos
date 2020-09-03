import React, { Component } from "react";
import { 
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
 
class Filmography extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    const apiUrl = 'https://ghibliapi.herokuapp.com/films'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({
        movies: data
      }))
  }  

  render() {
    var movieItems = []
     
    for(let i=0;i<10;i++){
      movieItems.push(
              <Col md="3" className="mt-5 mr-3">
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title>Card Title {i}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
      )
    }
     

    return (
      <Container> 
        <h2>Filmography</h2>
        <p>Here it is the list of Ghibli Movies:</p>
        <Row>
              {movieItems}
        </Row>
      </Container>
    );
  }
}
 
export default Filmography;