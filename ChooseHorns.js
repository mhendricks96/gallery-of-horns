import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class ChooseHorns extends React.Component {
  render() {
    return (
      <>
        <Dropdown>

          <DropdownButton id="dropdown-item-button" title="Number of Horns" >
            <Dropdown.Item as="button" onClick={this.props.showHorns} value="1">1</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.showHorns} value={2}>2</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.showHorns} value={3}>3</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.showHorns} value={100}>100</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.showHorns} value={'All'}>All</Dropdown.Item>
          </DropdownButton>

        </Dropdown>
      </>
    );
  }
}

export default ChooseHorns;