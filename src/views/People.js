import React, { Component } from "react";
 
import { 
  Container,
  Row,
  Col,
  Table
} from "react-bootstrap";

class People extends Component {
  constructor(props){
    super(props)

    this.state = {
      people: ''
    }
  }

  componentDidMount() {
    const apiUrl = "https://ghibliapi.herokuapp.com/people"
    fetch(apiUrl)
      .then((response) => response.json())
      // .then((data) => 
      //   fetch(apiUrl)
      //   .then((response) => response.json()))
      .then((data) => this.setState({
        people: data
      }))
  } 

  render() {
    console.log(this.state.people)
    var listPeople = []

    if(this.state.people !== '') {
      for(const [index, person] of this.state.people.entries()) {
        listPeople.push(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.gender}</td>
          </tr>
        )
      }
    }

    return (
      <Container> 
            <Row>
              <Col xs="12" sm="12" md="12" xl="12">
                <div className="title-page">
                  <h2>People</h2>
                  <p>Here it is the list of people that featured on Ghibli Movies</p>
                </div>
                <div className="overflow-table">
                  <Table className="people-content" striped bordered hover>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listPeople}
                    </tbody>
                  </Table>
                </div>
              </Col>
            
            </Row>
        </Container>
    );
  }
}

export default People;