import React from 'react';
//import Goat from 'src/goat.jpeg';

class HornedBeasts extends React.Component {
  render() {
    return (
    <div>
      <h2>{this.props.title}</h2>
      <img className= "animal-pictures" src={this.props.image_url} alt ={this.props.keyword} title={this.props.title}/>
      <p>{this.props.description}</p>
    </div>
    );
  }
}

export default HornedBeasts;