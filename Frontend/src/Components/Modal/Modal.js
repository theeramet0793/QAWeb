import './Modal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = (props) => {

    return(
        <div>
          <Modal show={props.show} onHide={props.onClickClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
              <Modal.Footer>
                <Button className="btn-close-modal" onClick={props.onClickClose}>
                  Cancel
                </Button>
                <Button className="btn-confirm-modal" onClick={props.onClickConfirm}>
                  Confirm
                </Button>
              </Modal.Footer>
          </Modal>
        </div>
    )
}

export default DeleteModal