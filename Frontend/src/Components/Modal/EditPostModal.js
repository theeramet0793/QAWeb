
import './EditPostModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextareaAutosize from 'react-textarea-autosize';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

const EditPostModal = (props) => {

    const [value,setValue] = useState({text:""})
    
    const handleTextInputChange = (event) =>{
        setValue({...value, text: event.target.value})
    }

    useEffect(()=>{
      setValue({...value, text: props.body})
    },[]);

    return(
        <div>
          <Modal show={props.show} onHide={props.onClickClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                  <TextareaAutosize 
                    value={value.text}
                    type="text"
                    onChange={handleTextInputChange}
                  />
                </Form>

            </Modal.Body>
              <Modal.Footer>
                <Button className="btn-close-modal" onClick={()=>props.onClickClose}>
                  Cancel
                </Button>
                <Button className="btn-confirm-modal" onClick={()=>props.onClickConfirm(value.text)}>
                  Confirm
                </Button>
              </Modal.Footer>
          </Modal>
        </div>
    )
}

export default EditPostModal