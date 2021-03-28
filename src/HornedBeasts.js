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
      image_url: this.props.image_url
    })
  }

  render() {
    return (
            <Card style={{ width: '30rem' }}>
                <Card.Img onClick={this.buttonClicked} variant="top" src={this.props.image_url} />
                <Card.Body>
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