import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class Choose extends React.Component {
  render() {
    return (
      <div>
        <Dropdown>

          <DropdownButton id="dropdown-item-button" title="Number of Horns" >
            <Dropdown.Item as="button" value = "1" onClick={this.props.showHorns} >1</Dropdown.Item>
            <Dropdown.Item as="button" value = "2" onClick={this.props.showHorns} >2</Dropdown.Item>
            <Dropdown.Item as="button" value = "3" onClick={this.props.showHorns} >3</Dropdown.Item>
            <Dropdown.Item as="button" value = "100" onClick={this.props.showHorns} >More</Dropdown.Item>
            <Dropdown.Item as="button" value = "all"onClick={this.props.showHorns} >All</Dropdown.Item>
          </DropdownButton>

        </Dropdown>
      </div>
    );
  }
}

export default Choose;