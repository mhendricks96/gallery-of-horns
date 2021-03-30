import React from 'react';
//import Goat from 'src/goat.jpeg';
import Button from 'react-bootstrap/Button';
import { AiFillHeart } from 'react-icons/ai';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfHearts: 0
    }
  }


  buttonClicked = () => {
    this.setState({
      numberOfHearts: this.state.numberOfHearts + 1
    });
    this.props.handleClick({
      title: this.props.title,
      description: this.props.description,
      image_url: this.props.image_url,
      name: this.props.keyword
    })
  }

  render() {
    return (
      <Card className="cards">
        <Card.Img onClick={this.buttonClicked} variant="top" src={this.props.image_url} />
        <Card.Body>
          <h3>{this.props.name}</h3>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
          <AiFillHeart />{this.state.numberOfHearts}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}


export default HornedBeasts;