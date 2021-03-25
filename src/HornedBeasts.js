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
    
  }

  render() {
    return (
    <div>
      <h2>{this.props.title}</h2>
      <img className= "animal-pictures" src={this.props.image_url} alt ={this.props.keyword} title={this.props.title}/>
      <div><AiFillHeart />{this.state.numberOfHearts}</div>
      <p>{this.props.description}</p>
      <Button onClick={this.buttonClicked} variant="secondary" size="lg block">
        This is my favorite Horned Beast!
      </Button>

    </div>
    );
  }
}

export default HornedBeasts;
