import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

  const Modal = ({ children }) => {
    
  // render a modal truh createPortal from ReactDOM

  return (
    ReactDOM.createPortal(
      <div className="modal">
        {children}
      </div>,
      document.getElementById('modal-root')
    )
    )};

export default Modal;