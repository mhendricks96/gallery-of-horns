import React from 'react'; 
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns'
import './Main.css';
//import { Dropdown } from 'bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'


class Main extends React.Component {
    render () {
        let beastArray = this.props.beasts.map((beast, index) => (
            <HornedBeasts
            name = {beast.keyword}
            title = {beast.title}
            image_url = {beast.image_url}
            description = {beast.description}
            key={index}
            handleClick={this.props.handleClick}
            />
        ));

            return (
            <main>
             <Dropdown>
                <Dropdown.Toggle variant="success" id="">
                    Number of Horns
                </Dropdown.Toggle>
             

             <Dropdown.Menu>
                 <Dropdown.Item>1 Horn</Dropdown.Item>
                 <Dropdown.Item>2 Horns</Dropdown.Item>
                 <Dropdown.Item>3 Horns</Dropdown.Item>
                 <Dropdown.Item>More</Dropdown.Item>
             </Dropdown.Menu>
             </Dropdown>
             <CardColumns>
                {beastArray} 
             </CardColumns>
            </main>
        );
    }
}

export default Main;