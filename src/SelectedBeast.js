import React from 'react';
import App from './App';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './SelectedBeast.css'

class SelectedBeast extends React.Component {
    render() {
        return (
          <Modal clasName="modal" show={this.props.show} onHide={this.props.hideBeast}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.beast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className= "modal-pics" src={this.props.beast.image_url} alt={this.props.beast.title}/>
            </Modal.Body>
            <Modal.Footer>
              <h1>{this.props.beast.description}</h1>
             <Button variant="primary" onClick={this.props.hideBeast}>Close</Button>
            </Modal.Footer>
         </Modal>
        )
    }

}

export default SelectedBeast;