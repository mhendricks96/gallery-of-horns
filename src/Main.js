import React from 'react';
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns'
import './Main.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown'
//import Form from 'react-bootstrap/Form';


class Main extends React.Component {


    render() {
        let beastArray = this.props.beasts.map((beast, index) => (
            <HornedBeasts
                name={beast.keyword}
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
                key={index}
                handleClick={this.props.handleClick}
                showHorns={this.props.showHorns}
            />
        ));

        return (
            <main>

                <CardColumns>
                    {beastArray}
                </CardColumns>
            </main >
        );
    }
}

export default Main;