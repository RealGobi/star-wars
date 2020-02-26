import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

  const Modal = ({ children }) => {
    
    return(
    ReactDOM.createPortal(
      <div className="modal">
        {children}
      </div>,
      document.getElementById('modal-root')
    )
    )};

export default Modal;