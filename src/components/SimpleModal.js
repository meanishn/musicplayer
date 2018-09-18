import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default (props) => {
    return (
      <div>
        <Modal isOpen={props.open} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
          <ModalBody>
            {props.body}
            <ModalFooter>
              {props.footer}
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
}