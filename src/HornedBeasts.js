import React from 'react';
//import Goat from 'src/goat.jpeg';
import Button from 'react-bootstrap/Button';
import { AiFillHeart } from 'react-icons/ai';

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
      <div>
        <h2>{this.props.title}</h2>
        <img onClick={this.buttonClicked} className="animal-pictures" src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
        <div><AiFillHeart />{this.state.numberOfHearts}</div>
        <p>{this.props.description}</p>

      </div>
    );
  }
}

export default HornedBeasts;
